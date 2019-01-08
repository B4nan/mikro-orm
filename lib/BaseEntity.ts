import { getMetadataStorage } from './MikroORM';
import { ObjectID } from 'bson';
import { Collection } from './Collection';
import { SCALAR_TYPES } from './EntityFactory';
import { EntityManager } from './EntityManager';

export class BaseEntity {

  public _id: ObjectID;
  [property: string]: any | BaseEntity | Collection<BaseEntity>;

  private _initialized = false;
  private _populated = false;

  constructor() {
    const metadata = getMetadataStorage();
    const meta = metadata[this.constructor.name];
    const props = meta.properties;

    Object.keys(props).forEach(prop => {
      if ([ReferenceType.ONE_TO_MANY, ReferenceType.MANY_TO_MANY].includes(props[prop].reference)) {
        this[prop] = new Collection(this, props[prop], []);
      }
    });
  }

  get id(): string {
    return this._id ? this._id.toHexString() : null;
  }

  set id(id: string) {
    this._id = id ? new ObjectID(id) : null;
  }

  isInitialized(): boolean {
    return this._initialized !== false;
  }

  shouldPopulate(collection: Collection<BaseEntity> = null): boolean {
    return this._populated && !collection;
  }

  populated(populated = true): void {
    this._populated = populated;
  }

  setEntityManager(em: EntityManager): void {
    Object.defineProperty(this, '_em', {
      value: em,
      enumerable: false,
      writable: true,
    });
  }

  getEntityManager(em: EntityManager = null): EntityManager {
    if (em) {
      this.setEntityManager(em);
    }

    if (!this._em) {
      throw new Error('This entity is not attached to EntityManager, please provide one!');
    }

    return this._em;
  }

  async init(populated = true, em: EntityManager = null): Promise<BaseEntity> {
    await (em || this.getEntityManager(em)).findOne(this.constructor.name, this._id);
    this.populated(populated);

    return this;
  }

  assign(data: any, em: EntityManager = null) {
    const metadata = getMetadataStorage();
    const meta = metadata[this.constructor.name];
    const props = meta.properties;

    Object.keys(data).forEach(prop => {
      if (props[prop] && props[prop].reference === ReferenceType.MANY_TO_ONE && data[prop]) {
        if (data[prop] instanceof BaseEntity) {
          return this[prop] = data[prop];
        }

        if (data[prop] instanceof ObjectID) {
          return this[prop] = this.getEntityManager(em).getReference(props[prop].type, data[prop].toHexString());
        }

        const id = typeof data[prop] === 'object' ? data[prop].id : data[prop];

        if (id) {
          return this[prop] = this.getEntityManager(em).getReference(props[prop].type, id);
        }
      }

      const isCollection = props[prop] && [ReferenceType.ONE_TO_MANY, ReferenceType.MANY_TO_MANY].includes(props[prop].reference);

      if (isCollection && Array.isArray(data[prop])) {
        const items = data[prop].map((item: any) => {
          if (item instanceof ObjectID) {
            return this.getEntityManager(em).getReference(props[prop].type, item.toHexString());
          }

          if (item instanceof BaseEntity) {
            return item;
          }

          return this.getEntityManager(em).getReference(props[prop].type, item);
        });

        return (this[prop] as Collection<BaseEntity>).set(items);
      }

      if (props[prop] && props[prop].reference === ReferenceType.SCALAR && SCALAR_TYPES.includes(props[prop].type)) {
        this[prop] = this.getEntityManager(em).validator.validateProperty(props[prop], data[prop], this)
      }

      this[prop] = data[prop];
    });
  }

  toObject(parent: BaseEntity = this, collection: Collection<BaseEntity> = null): any {
    const ret = { id: this.id } as any;

    if (!this.isInitialized()) {
      return { id: this.id } as any;
    }

    Object.keys(this).forEach(prop => {
      if (['id'].includes(prop) || prop.startsWith('_')) {
        return;
      }

      if (this[prop] instanceof Collection) {
        const col = this[prop] as Collection<BaseEntity>;

        if (col.isInitialized(true) && col.shouldPopulate()) {
          ret[prop] = col.toArray(this);
        } else if (col.isInitialized() && !col.shouldPopulate()) {
          ret[prop] = col.getIdentifiers('id');
        }

        return;
      }

      if (this[prop] instanceof BaseEntity) {
        if (this[prop].isInitialized() && this[prop].shouldPopulate(collection) && this[prop] !== parent) {
          return ret[prop] = (this[prop] as BaseEntity).toObject(this);
        }

        return ret[prop] = this[prop].id;
      }

      ret[prop] = this[prop];
    });

    return ret;
  }

  toJSON(): any {
    return this.toObject();
  }

}

export enum ReferenceType {
  SCALAR = 0,
  MANY_TO_ONE = 1,
  ONE_TO_MANY = 2,
  MANY_TO_MANY = 3,
}

export interface EntityProperty {
  name: string;
  fk: string;
  entity: () => string | Function;
  type: string;
  reference: ReferenceType;
  attributes?: { [attribute: string]: any };
  owner?: boolean;
  inversedBy: string;
  mappedBy: string;
}

export interface EntityMetadata {
  name: string;
  constructorParams: string[];
  collection: string;
  path: string;
  properties: { [property: string]: EntityProperty };
  customRepository: any;
  hooks: { [type: string]: string[] };
}
