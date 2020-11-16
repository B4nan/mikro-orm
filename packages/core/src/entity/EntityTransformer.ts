import { Collection } from './Collection';
import { AnyEntity, EntityData, EntityMetadata, IPrimaryKey, PopulateOptions } from '../typings';
import { Reference } from './Reference';
import { wrap } from './wrap';
import { Platform } from '../platforms';
import { Utils } from '../utils/Utils';

/**
 * Helper that allows to keep track of where we are currently at when serializing complex entity graph with cycles.
 * Before we process a property, we call `visit` that checks if it is not a cycle path (but allows to pass cycles that
 * are defined in populate hint). If not, we proceed and call `leave` afterwards.
 */
export class SerializationContext<T extends AnyEntity<T>> {

  readonly path: string[] = [];

  constructor(private readonly populate: PopulateOptions<T>[]) { }

  visit(prop: string): boolean {
    if (!this.path.find(item => prop === item)) {
      this.path.push(prop);
      return false;
    }

    // check if the path is explicitly populated
    if (!this.isMarkedAsPopulated(prop)) {
      return true;
    }

    this.path.push(prop);
    return false;
  }

  leave<U>(path: string) {
    const last = this.path.pop();

    /* istanbul ignore next */
    if (last !== path) {
      throw new Error(`Trying to leave wrong property: ${path} instead of ${last}`);
    }
  }

  /**
   * When initializing new context, we need to propagate it to the whole entity graph recursively.
   */
  static propagate(root: SerializationContext<AnyEntity>, entity: AnyEntity): void {
    entity.__helper!.__serializationContext.root = root;

    const items: AnyEntity[] = [];
    Object.keys(entity).forEach(key => {
      if (Utils.isEntity(entity[key], true)) {
        items.push(entity[key]);
      } else if (Utils.isCollection(entity[key])) {
        items.push(...(entity[key] as Collection<any>).getItems(false));
      }
    });

    items
      .filter(item => !item.__helper!.__serializationContext.root)
      .forEach(item => this.propagate(root, item));
  }

  private isMarkedAsPopulated(path: string): boolean {
    let populate: PopulateOptions<T>[] | undefined = this.populate;

    for (const segment of this.path) {
      if (!populate) {
        return false;
      }

      const exists = populate.find(p => p.field === segment) as PopulateOptions<T>;

      if (exists) {
        populate = exists.children;
      }
    }

    return !!populate?.find(p => p.field === path);
  }

}

export class EntityTransformer {

  static toObject<T extends AnyEntity<T>>(entity: T, ignoreFields: string[] = []): EntityData<T> {
    const wrapped = entity.__helper!;
    let contextCreated = false;

    if (!wrapped.__serializationContext.root) {
      const root = new SerializationContext<T>(wrapped.__serializationContext.populate ?? []);
      SerializationContext.propagate(root, entity);
      contextCreated = true;
    }

    const root = wrapped.__serializationContext.root;
    const meta = entity.__meta!;
    const ret = {} as EntityData<T>;

    meta.primaryKeys
      .filter(pk => !Utils.isDefined(entity[pk], true) || !(meta.properties[pk].hidden || ignoreFields.includes(pk)))
      .map(pk => {
        let value: unknown;

        if (meta.properties[pk].serializer) {
          value = meta.properties[pk].serializer!(entity[pk]);
        } else if (Utils.isEntity(entity[pk], true)) {
          value = EntityTransformer.processEntity(pk, entity, entity.__platform!);
        } else {
          value = entity.__platform!.normalizePrimaryKey(entity[pk] as unknown as IPrimaryKey);
        }

        return [pk, value] as [string & keyof T, string];
      })
      .forEach(([pk, value]) => ret[this.propertyName(meta, pk, entity.__platform!)] = value as unknown as T[keyof T]);

    if ((!wrapped.isInitialized() && wrapped.hasPrimaryKey())) {
      return ret;
    }

    // normal properties
    Object.keys(entity)
      .filter(prop => this.isVisible(meta, prop as keyof T & string, ignoreFields))
      .map(prop => {
        const cycle = root!.visit(prop);

        if (cycle) {
          return [prop, undefined];
        }

        const val = EntityTransformer.processProperty<T>(prop as keyof T & string, entity);
        root!.leave(prop);

        return [prop, val];
      })
      .filter(([, value]) => typeof value !== 'undefined')
      .forEach(([prop, value]) => ret[this.propertyName(meta, prop as keyof T & string)] = value as T[keyof T]);

    // decorated getters
    meta.props
      .filter(prop => prop.getter && !prop.hidden && typeof entity[prop.name] !== 'undefined')
      .forEach(prop => ret[this.propertyName(meta, prop.name)] = entity[prop.name]);

    // decorated get methods
    meta.props
      .filter(prop => prop.getterName && !prop.hidden && entity[prop.getterName] as unknown instanceof Function)
      .forEach(prop => ret[this.propertyName(meta, prop.name)] = (entity[prop.getterName!] as unknown as () => void)());

    if (contextCreated) {
      delete wrapped.__serializationContext.root;
    }

    return ret;
  }

  private static isVisible<T extends AnyEntity<T>>(meta: EntityMetadata<T>, prop: keyof T & string, ignoreFields: string[]): boolean {
    const visible = meta.properties[prop] && !meta.properties[prop].hidden;
    return visible && !meta.primaryKeys.includes(prop) && !prop.startsWith('_') && !ignoreFields.includes(prop);
  }

  private static propertyName<T extends AnyEntity<T>>(meta: EntityMetadata<T>, prop: keyof T & string, platform?: Platform): keyof T & string {
    if (meta.properties[prop].serializedName) {
      return meta.properties[prop].serializedName as keyof T & string;
    }

    if (meta.properties[prop].primary && platform) {
      return platform.getSerializedPrimaryKeyField(prop) as keyof T & string;
    }

    return prop;
  }

  private static processProperty<T extends AnyEntity<T>>(prop: keyof T & string, entity: T): T[keyof T] | undefined {
    const property = entity.__meta!.properties[prop];

    /* istanbul ignore next */
    const serializer = property?.serializer;

    if (serializer) {
      return serializer(entity[prop]);
    }

    if (Utils.isCollection(entity[prop])) {
      return EntityTransformer.processCollection(prop, entity);
    }

    /* istanbul ignore next */
    const customType = property?.customType;

    if (customType) {
      return customType.toJSON(entity[prop], entity.__platform!);
    }

    if (Utils.isEntity(entity[prop], true)) {
      return EntityTransformer.processEntity(prop, entity, entity.__platform!);
    }

    return entity[prop];
  }

  private static processEntity<T extends AnyEntity<T>>(prop: keyof T, entity: T, platform: Platform): T[keyof T] | undefined {
    const child = entity[prop] as unknown as T | Reference<T>;
    const wrapped = (child as T).__helper!;

    if (wrapped.isInitialized() && wrapped.__populated && child !== entity && !wrapped.__lazyInitialized) {
      const args = [...wrapped.__meta.toJsonParams.map(() => undefined)];
      return wrap(child).toJSON(...args) as T[keyof T];
    }

    return platform.normalizePrimaryKey(wrapped.getPrimaryKey() as IPrimaryKey) as unknown as T[keyof T];
  }

  private static processCollection<T extends AnyEntity<T>>(prop: keyof T, entity: T): T[keyof T] | undefined {
    const col = entity[prop] as unknown as Collection<AnyEntity>;

    if (col.isInitialized(true) && col.shouldPopulate()) {
      return col.toArray() as unknown as T[keyof T];
    }

    if (col.isInitialized()) {
      return col.getIdentifiers() as unknown as T[keyof T];
    }
  }

}
