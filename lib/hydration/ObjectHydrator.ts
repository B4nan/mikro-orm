import { EntityProperty, IEntity, IEntityType, IPrimaryKey } from '../decorators';
import { Hydrator } from './Hydrator';
import { Collection, ReferenceType } from '../entity';
import { Utils } from '../utils';

export class ObjectHydrator extends Hydrator {

  protected hydrateProperty<T extends IEntityType<T>>(entity: T, prop: EntityProperty, value: any): void {
    if (prop.reference === ReferenceType.MANY_TO_ONE) {
      this.hydrateManyToOne(value, entity, prop);
    } else if (prop.reference === ReferenceType.ONE_TO_MANY) {
      this.hydrateOneToMany(entity, prop, value);
    } else if (prop.reference === ReferenceType.MANY_TO_MANY) {
      this.hydrateManyToMany(entity, prop, value);
    } else if (value) { // ReferenceType.SCALAR
      this.hydrateScalar(entity, prop, value);
    }
  }

  private hydrateOneToMany<T extends IEntityType<T>>(entity: T, prop: EntityProperty, value: any): void {
    entity[prop.name as keyof T] = new Collection<IEntity>(entity, undefined, !!value) as T[keyof T];
  }

  private hydrateScalar<T extends IEntityType<T>>(entity: T, prop: EntityProperty, value: any): void {
    entity[prop.name as keyof T] = value;
  }

  private hydrateManyToMany<T extends IEntityType<T>>(entity: T, prop: EntityProperty, value: any): void {
    if (prop.owner) {
      return this.hydrateManyToManyOwner(entity, prop, value);
    } else if (!entity[prop.name as keyof T]) {
      this.hydrateManyToManyInverse(entity, prop);
    }
  }

  private hydrateManyToManyOwner<T extends IEntityType<T>>(entity: T, prop: EntityProperty, value: any): void {
    if (Array.isArray(value)) {
      const items = value.map((id: IPrimaryKey) => this.factory.createReference(prop.type, id));
      entity[prop.name as keyof T] = new Collection<IEntity>(entity, items) as T[keyof T];
    } else if (!entity[prop.name as keyof T]) {
      const items = this.driver.getPlatform().usesPivotTable() ? undefined : [];
      entity[prop.name as keyof T] = new Collection<IEntity>(entity, items, false) as T[keyof T];
    }
  }

  private hydrateManyToManyInverse<T extends IEntityType<T>>(entity: T, prop: EntityProperty): void {
    if (!entity[prop.name as keyof T]) {
      entity[prop.name as keyof T] = new Collection<IEntity>(entity, undefined, false) as T[keyof T];
    }
  }

  private hydrateManyToOne<T extends IEntityType<T>>(value: any, entity: T, prop: EntityProperty): void {
    if (value && !Utils.isEntity(value)) {
      entity[prop.name as keyof T] = this.factory.createReference(prop.type, value as IPrimaryKey);
    }
  }

}
