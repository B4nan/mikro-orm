import { Configuration, RequestContext, Utils } from './utils';
import { EntityAssigner, EntityFactory, EntityLoader, EntityRepository, EntityValidator, ReferenceType } from './entity';
import { UnitOfWork } from './unit-of-work';
import { FilterQuery, IDatabaseDriver } from './drivers';
import { EntityData, EntityName, IEntity, IEntityType, IPrimaryKey } from './decorators';
import { QueryBuilder, QueryOrder, SmartQueryHelper } from './query';
import { MetadataStorage } from './metadata';
import { Connection } from './connections';

export class EntityManager {

  private readonly validator = new EntityValidator(this.config.get('strict'));
  private readonly repositoryMap: Record<string, EntityRepository<IEntity>> = {};
  private readonly entityLoader = new EntityLoader(this);
  private readonly metadata = MetadataStorage.getMetadata();
  private readonly unitOfWork = new UnitOfWork(this);
  private readonly entityFactory = new EntityFactory(this.unitOfWork, this.driver, this.config);

  constructor(readonly config: Configuration,
              private readonly driver: IDatabaseDriver<Connection>) { }

  getDriver<D extends IDatabaseDriver<Connection> = IDatabaseDriver<Connection>>(): D {
    return this.driver as D;
  }

  getConnection<C extends Connection = Connection>(): C {
    return this.driver.getConnection() as C;
  }

  getRepository<T extends IEntityType<T>>(entityName: EntityName<T>): EntityRepository<T> {
    entityName = Utils.className(entityName);

    if (!this.repositoryMap[entityName]) {
      const meta = this.metadata[entityName];
      const RepositoryClass = this.config.getRepositoryClass(meta.customRepository);
      this.repositoryMap[entityName] = new RepositoryClass(this, entityName);
    }

    return this.repositoryMap[entityName] as EntityRepository<T>;
  }

  getValidator(): EntityValidator {
    return this.validator;
  }

  createQueryBuilder(entityName: EntityName<IEntity>, alias?: string): QueryBuilder {
    entityName = Utils.className(entityName);
    return new QueryBuilder(entityName, this.metadata, this.driver, alias);
  }

  async find<T extends IEntityType<T>>(entityName: EntityName<T>, where?: FilterQuery<T>, options?: FindOptions): Promise<T[]>;
  async find<T extends IEntityType<T>>(entityName: EntityName<T>, where?: FilterQuery<T>, populate?: string[], orderBy?: Record<string, QueryOrder>, limit?: number, offset?: number): Promise<T[]>;
  async find<T extends IEntityType<T>>(entityName: EntityName<T>, where = {} as FilterQuery<T>, populate?: string[] | FindOptions, orderBy?: Record<string, QueryOrder>, limit?: number, offset?: number): Promise<T[]> {
    entityName = Utils.className(entityName);
    where = SmartQueryHelper.processWhere(where);
    this.validator.validateParams(where);
    const options = Utils.isObject<FindOptions>(populate) ? populate : { populate, orderBy, limit, offset };
    const results = await this.driver.find(entityName, where, options.populate || [], options.orderBy || {}, options.limit, options.offset);

    if (results.length === 0) {
      return [];
    }

    const ret: T[] = [];

    for (const data of results) {
      const entity = this.merge<T>(entityName, data);
      ret.push(entity);
    }

    await this.entityLoader.populate(entityName, ret, options.populate || []);

    return ret;
  }

  async findOne<T extends IEntityType<T>>(entityName: EntityName<T>, where: FilterQuery<T> | IPrimaryKey, options?: FindOneOptions): Promise<T | null>;
  async findOne<T extends IEntityType<T>>(entityName: EntityName<T>, where: FilterQuery<T> | IPrimaryKey, populate?: string[], orderBy?: Record<string, QueryOrder>): Promise<T | null>;
  async findOne<T extends IEntityType<T>>(entityName: EntityName<T>, where: FilterQuery<T> | IPrimaryKey, populate?: string[] | FindOneOptions, orderBy?: Record<string, QueryOrder>): Promise<T | null> {
    entityName = Utils.className(entityName);
    this.validator.validateEmptyWhere(where);

    let entity = this.getUnitOfWork().tryGetById<T>(entityName, where);
    const options = Utils.isObject<FindOneOptions>(populate) ? populate : { populate, orderBy };

    if (entity && entity.isInitialized()) {
      await this.entityLoader.populate(entityName, [entity], options.populate || []);
      return entity;
    }

    where = SmartQueryHelper.processWhere(where as FilterQuery<T>);
    this.validator.validateParams(where);
    const data = await this.driver.findOne(entityName, where, options.populate, options.orderBy);

    if (!data) {
      return null;
    }

    entity = this.merge(entityName, data) as T;
    await this.entityLoader.populate(entityName, [entity], options.populate || []);

    return entity;
  }

  async beginTransaction(): Promise<void> {
    await this.driver.beginTransaction();
  }

  async commit(): Promise<void> {
    await this.driver.commit();
  }

  async rollback(): Promise<void> {
    await this.driver.rollback();
  }

  async transactional(cb: (em: EntityManager) => Promise<any>): Promise<any> {
    const em = this.fork();
    await em.getDriver().transactional(async () => {
      const ret = await cb(em);
      await em.flush();

      return ret;
    });
  }

  async nativeInsert<T extends IEntityType<T>>(entityName: EntityName<T>, data: EntityData<T>): Promise<IPrimaryKey> {
    entityName = Utils.className(entityName);
    data = SmartQueryHelper.processParams(data);
    this.validator.validateParams(data, 'insert data');
    const res = await this.driver.nativeInsert(entityName, data);

    return res.insertId;
  }

  async nativeUpdate<T extends IEntityType<T>>(entityName: EntityName<T>, where: FilterQuery<T>, data: EntityData<T>): Promise<number> {
    entityName = Utils.className(entityName);
    data = SmartQueryHelper.processParams(data);
    where = SmartQueryHelper.processWhere(where as FilterQuery<T>);
    this.validator.validateParams(data, 'update data');
    this.validator.validateParams(where, 'update condition');
    const res = await this.driver.nativeUpdate(entityName, where, data);

    return res.affectedRows;
  }

  async nativeDelete<T extends IEntityType<T>>(entityName: EntityName<T>, where: FilterQuery<T> | string | any): Promise<number> {
    entityName = Utils.className(entityName);
    where = SmartQueryHelper.processWhere(where as FilterQuery<T>);
    this.validator.validateParams(where, 'delete condition');
    const res = await this.driver.nativeDelete(entityName, where);

    return res.affectedRows;
  }

  /**
   * Shortcut to driver's aggregate method. Available in MongoDriver only.
   */
  async aggregate(entityName: EntityName<IEntity>, pipeline: any[]): Promise<any[]> {
    entityName = Utils.className(entityName);
    return this.driver.aggregate(entityName, pipeline);
  }

  merge<T extends IEntityType<T>>(entity: T): T;
  merge<T extends IEntityType<T>>(entityName: EntityName<T>, data: EntityData<T>): T;
  merge<T extends IEntityType<T>>(entityName: EntityName<T> | T, data?: EntityData<T>): T {
    if (Utils.isEntity(entityName)) {
      return this.merge(entityName.constructor.name, entityName as EntityData<T>);
    }

    entityName = Utils.className(entityName);
    this.validator.validatePrimaryKey(data!, this.metadata[entityName]);
    const entity = Utils.isEntity<T>(data) ? data : this.getEntityFactory().create<T>(entityName, data!, true);

    // add to IM immediately - needed for self-references that can be part of `data` (and do not trigger cascade merge)
    this.getUnitOfWork().merge(entity, [entity]);
    EntityAssigner.assign(entity, data!, true);
    this.getUnitOfWork().merge(entity); // add to IM again so we have correct payload saved to change set computation

    return entity;
  }

  /**
   * Creates new instance of given entity and populates it with given data
   */
  create<T extends IEntityType<T>>(entityName: EntityName<T>, data: EntityData<T>): T {
    return this.getEntityFactory().create(entityName, data, false);
  }

  /**
   * Gets a reference to the entity identified by the given type and identifier without actually loading it, if the entity is not yet loaded
   */
  getReference<T extends IEntityType<T>>(entityName: EntityName<T>, id: IPrimaryKey): T {
    const entity = this.getEntityFactory().createReference<T>(entityName, id);
    this.getUnitOfWork().merge(entity);

    return entity;
  }

  async count<T extends IEntityType<T>>(entityName: EntityName<T>, where: FilterQuery<T>): Promise<number> {
    entityName = Utils.className(entityName);
    where = SmartQueryHelper.processWhere(where as FilterQuery<T>);
    this.validator.validateParams(where);
    return this.driver.count(entityName, where);
  }

  async persist(entity: IEntity | IEntity[], flush = this.config.get('autoFlush')): Promise<void> {
    if (flush) {
      await this.persistAndFlush(entity);
    } else {
      this.persistLater(entity);
    }
  }

  async persistAndFlush(entity: IEntity | IEntity[]): Promise<void> {
    entity = Array.isArray(entity) ? entity : [entity];

    for (const ent of entity) {
      this.getUnitOfWork().persist(ent);
    }

    await this.flush();
  }

  persistLater(entity: IEntity | IEntity[]): void {
    entity = Array.isArray(entity) ? entity : [entity];

    for (const ent of entity) {
      this.getUnitOfWork().persist(ent);
    }
  }

  async remove<T extends IEntityType<T>>(entityName: EntityName<T>, where: T | any, flush = this.config.get('autoFlush')): Promise<number> {
    entityName = Utils.className(entityName);

    if (Utils.isEntity(where)) {
      await this.removeEntity(where, flush);
      return 1;
    }

    return this.nativeDelete(entityName, where);
  }

  async removeEntity(entity: IEntity, flush = this.config.get('autoFlush')): Promise<void> {
    if (flush) {
      await this.removeAndFlush(entity);
    } else {
      this.removeLater(entity);
    }
  }

  async removeAndFlush(entity: IEntity): Promise<void> {
    this.getUnitOfWork().remove(entity);
    await this.flush();
  }

  removeLater(entity: IEntity): void {
    this.getUnitOfWork().remove(entity);
  }

  /**
   * flush changes to database
   */
  async flush(): Promise<void> {
    await this.getUnitOfWork().commit();
  }

  /**
   * clear identity map, detaching all entities
   */
  clear(): void {
    this.getUnitOfWork().clear();
  }

  canPopulate(entityName: string | Function, property: string): boolean {
    entityName = Utils.className(entityName);
    const [p, ...parts] = property.split('.');
    const props = this.metadata[entityName].properties;
    const ret = p in props && props[p].reference !== ReferenceType.SCALAR;

    if (!ret) {
      return false;
    }

    if (parts.length > 0) {
      return this.canPopulate(props[p].type, parts.join('.'));
    }

    return ret;
  }

  fork(clear = true): EntityManager {
    const em = new EntityManager(this.config, this.driver);

    if (!clear) {
      Object.values(this.getUnitOfWork().getIdentityMap()).forEach(entity => em.merge(entity));
    }

    return em;
  }

  getUnitOfWork(): UnitOfWork {
    const em = RequestContext.getEntityManager() || this;
    return em.unitOfWork;
  }

  getEntityFactory(): EntityFactory {
    const em = RequestContext.getEntityManager() || this;
    return em.entityFactory;
  }

}

export interface FindOptions {
  populate?: string[];
  orderBy?: Record<string, QueryOrder>;
  limit?: number;
  offset?: number;
}

export interface FindOneOptions {
  populate?: string[];
  orderBy?: Record<string, QueryOrder>;
}
