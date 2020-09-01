import { assign, Embeddable, Embedded, Entity, Logger, MikroORM, PrimaryKey, Property, ReferenceType, SerializedPrimaryKey } from '@mikro-orm/core';
import { ObjectId, MongoDriver } from '@mikro-orm/mongodb';

@Embeddable()
class Address1 {

  @Property()
  street?: string;

  @Property()
  postalCode?: string;

  @Property()
  city?: string;

  @Property()
  country?: string;

  constructor(street?: string, postalCode?: string, city?: string, country?: string) {
    this.street = street;
    this.postalCode = postalCode;
    this.city = city;
    this.country = country;
  }

}

@Embeddable()
class Address2 {

  @Property()
  street!: string;

  @Property()
  postalCode?: string;

  @Property()
  city!: string;

  @Property()
  country!: string;

  constructor(street: string, city: string, country: string, postalCode?: string) {
    this.street = street;
    this.city = city;
    this.country = country;
    this.postalCode = postalCode;
  }

}

@Entity()
class User {

  @PrimaryKey({ type: 'ObjectId' })
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string;

  @Embedded(() => Address1)
  address1!: Address1;

  @Embedded({ entity: () => Address2, prefix: 'addr_', nullable: true })
  address2?: Address2;

  @Embedded({ entity: () => Address1, prefix: false })
  address3 = new Address1();

}

describe('embedded entities in mongo', () => {

  let orm: MikroORM<MongoDriver>;

  beforeAll(async () => {
    orm = await MikroORM.init({
      entities: [Address1, Address2, User],
      clientUrl: 'mongodb://localhost:27017,localhost:27018,localhost:27019/mikro-orm-test-embeddables?replicaSet=rs0',
      type: 'mongo',
    });
  });

  afterAll(async () => {
    await orm.em.getDriver().dropCollections();
    await orm.close(true);
  });

  test('metadata', async () => {
    expect(orm.getMetadata().get('Address1').embeddable).toBe(true);
    expect(orm.getMetadata().get('Address1').properties).toMatchObject({
      street: { name: 'street', type: 'string' },
      postalCode: { name: 'postalCode', type: 'string' },
      city: { name: 'city', type: 'string' },
      country: { name: 'country', type: 'string' },
    });
    expect(orm.getMetadata().get('User').properties.address1).toMatchObject({
      name: 'address1',
      reference: ReferenceType.EMBEDDED,
      type: 'Address1',
    });
    expect(orm.getMetadata().get('User').properties.address1_street).toMatchObject({
      name: 'address1_street',
      reference: ReferenceType.SCALAR,
      type: 'string',
    });
    expect(orm.getMetadata().get('User').properties.address2).toMatchObject({
      name: 'address2',
      reference: ReferenceType.EMBEDDED,
      type: 'Address2',
    });
    expect(orm.getMetadata().get('User').properties.addr_street).toMatchObject({
      name: 'addr_street',
      reference: ReferenceType.SCALAR,
      type: 'string',
      nullable: true,
    });
    expect(orm.getMetadata().get('User').properties.address3).toMatchObject({
      name: 'address3',
      reference: ReferenceType.EMBEDDED,
      type: 'Address1',
    });
    expect(orm.getMetadata().get('User').properties.street).toMatchObject({
      name: 'street',
      reference: ReferenceType.SCALAR,
      type: 'string',
    });
  });

  test('persist and load', async () => {
    const user = new User();
    user.address1 = new Address1('Downing street 10', '123', 'London 1', 'UK 1');
    user.address2 = new Address2('Downing street 11', 'London 2', 'UK 2');
    user.address3 = new Address1('Downing street 12', '789', 'London 3', 'UK 3');

    const mock = jest.fn();
    const logger = new Logger(mock, true);
    Object.assign(orm.config, { logger });
    orm.config.reset('highlighter');
    await orm.em.persistAndFlush(user);
    orm.em.clear();
    expect(mock.mock.calls[0][0]).toMatch(`db.getCollection('user').insertOne({ address1_street: 'Downing street 10', address1_postalCode: '123', address1_city: 'London 1', address1_country: 'UK 1', addr_street: 'Downing street 11', addr_postalCode: undefined, addr_city: 'London 2', addr_country: 'UK 2', street: 'Downing street 12', postalCode: '789', city: 'London 3', country: 'UK 3' }, { session: undefined });`);

    const u = await orm.em.findOneOrFail(User, user.id);
    expect(mock.mock.calls[1][0]).toMatch(/db\.getCollection\('user'\)\.find\({ _id: .* }, { session: undefined }\)\.limit\(1\).toArray\(\);/);
    expect(u.address1).toBeInstanceOf(Address1);
    expect(u.address1).toEqual({
      street: 'Downing street 10',
      postalCode: '123',
      city: 'London 1',
      country: 'UK 1',
    });
    expect(u.address2).toBeInstanceOf(Address2);
    expect(u.address2).toEqual({
      street: 'Downing street 11',
      postalCode: null,
      city: 'London 2',
      country: 'UK 2',
    });
    expect(u.address3).toBeInstanceOf(Address1);
    expect(u.address3).toEqual({
      street: 'Downing street 12',
      postalCode: '789',
      city: 'London 3',
      country: 'UK 3',
    });

    u.address2!.postalCode = '111';
    await orm.em.flush();
    expect(mock.mock.calls[2][0]).toMatch(/db\.getCollection\('user'\)\.updateMany\({ _id: .* }, { '\$set': { addr_postalCode: '111' } }, { session: undefined }\);/);
    orm.em.clear();

    const u1 = await orm.em.findOneOrFail(User, { address1: { city: 'London 1', postalCode: '123' } });
    expect(mock.mock.calls[3][0]).toMatch(/db\.getCollection\('user'\)\.find\({ address1_city: 'London 1', address1_postalCode: '123' }, { session: undefined }\)\.limit\(1\).toArray\(\);/);
    expect(u1.address1.city).toBe('London 1');
    expect(u1.address1.postalCode).toBe('123');
    const u2 = await orm.em.findOneOrFail(User, { address1: { city: /^London/ } });
    expect(mock.mock.calls[4][0]).toMatch(/db\.getCollection\('user'\)\.find\({ address1_city: \/\^London\/ }, { session: undefined }\)\.limit\(1\).toArray\(\);/);
    expect(u2.address1.city).toBe('London 1');
    expect(u2.address1.postalCode).toBe('123');
    expect(u2).toBe(u1);
    const u3 = await orm.em.findOneOrFail(User, { $or: [{ address1: { city: 'London 1' } }, { address1: { city: 'Berlin' } }] });
    expect(mock.mock.calls[5][0]).toMatch(/db\.getCollection\('user'\)\.find\({ '\$or': \[ { address1_city: 'London 1' }, { address1_city: 'Berlin' } ] }, { session: undefined }\)\.limit\(1\).toArray\(\);/);
    expect(u3).toBe(u1);
    const err = `Using operators inside embeddables is not allowed, move the operator above. (property: User.address1, payload: { address1: { '$or': [ [Object], [Object] ] } })`;
    await expect(orm.em.findOneOrFail(User, { address1: { $or: [{ city: 'London 1' }, { city: 'Berlin' }] } })).rejects.toThrowError(err);
  });

  test('#assign() works with embeddables', async () => {
    const jon = new User();
    assign(jon, { address1: { city: '1', country: '2', postalCode: '3', street: '4' } });
    expect(jon.address1).toMatchObject({ city: '1', country: '2', postalCode: '3', street: '4' });
  });

});
