import { Collection } from './Collection';
import { SCALAR_TYPES } from './EntityFactory';
import { EntityManager } from '../EntityManager';
import { EntityData, EntityProperty, IEntity, IEntityType } from '../decorators';
import { Utils } from '../utils';
import { MetadataStorage } from '../metadata';
import { ReferenceType } from './enums';

export class EntityAssigner {

  static assign<T extends IEntityType<T>>(entity: T, data: EntityData<T>, onlyProperties = false): void {
    const meta = MetadataStorage.getMetadata(entity.constructor.name);
    const props = meta.properties;

    Object.keys(data).forEach(prop => {
      if (onlyProperties && !props[prop]) {
        return;
      }

      const value = data[prop as keyof EntityData<T>];

      if (props[prop] && props[prop].reference === ReferenceType.MANY_TO_ONE && value) {
        return EntityAssigner.assignReference<T>(entity, value, props[prop], entity.__em);
      }

      const isCollection = props[prop] && [ReferenceType.ONE_TO_MANY, ReferenceType.MANY_TO_MANY].includes(props[prop].reference);

      if (isCollection && Array.isArray(value)) {
        return EntityAssigner.assignCollection<T>(entity, value, props[prop], entity.__em);
      }

      if (props[prop] && props[prop].reference === ReferenceType.SCALAR && SCALAR_TYPES.includes(props[prop].type)) {
        entity[prop as keyof T] = entity.__em.getValidator().validateProperty(props[prop], value, entity);
      }

      entity[prop as keyof T] = value as T[keyof T];
    });
  }

  private static assignReference<T extends IEntityType<T>>(entity: T, value: any, prop: EntityProperty, em: EntityManager): void {
    if (Utils.isEntity(value)) {
      entity[prop.name as keyof T] = value as T[keyof T];
      return;
    }

    const meta = MetadataStorage.getMetadata(entity.constructor.name);
    const id = Utils.extractPK(value, meta);

    if (id) {
      const normalized = em.getDriver().getPlatform().normalizePrimaryKey(id);
      entity[prop.name as keyof T] = em.getReference(prop.type, normalized);
      return;
    }

    const name = entity.constructor.name;
    throw new Error(`Invalid reference value provided for '${name}.${prop.name}' in ${name}.assign(): ${JSON.stringify(value)}`);
  }

  private static assignCollection<T extends IEntityType<T>>(entity: T, value: any[], prop: EntityProperty, em: EntityManager): void {
    const invalid: any[] = [];
    const items = value.map((item: any) => {
      if (Utils.isEntity(item)) {
        return item;
      }

      if (Utils.isPrimaryKey(item)) {
        const id = em.getDriver().getPlatform().normalizePrimaryKey(item);
        return em.getReference(prop.type, id);
      }

      invalid.push(item);

      return item;
    });

    if (invalid.length > 0) {
      const name = entity.constructor.name;
      throw new Error(`Invalid collection values provided for '${name}.${prop.name}' in ${name}.assign(): ${JSON.stringify(invalid)}`);
    }

    (entity[prop.name as keyof T] as Collection<IEntity>).set(items);
  }

}
