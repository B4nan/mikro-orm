import { PropertyOptions } from './Property';
import { EntityProperty, IEntity } from './Entity';
import { MetadataStorage } from '../metadata';
import { Utils } from '../utils';
import { Cascade, ReferenceType } from '../entity';

export function ManyToOne(options: ManyToOneOptions = {}): Function {
  return function (target: IEntity, propertyName: string) {
    const meta = MetadataStorage.getMetadata(target.constructor.name);
    Utils.lookupPathFromDecorator(meta);
    const property = { name: propertyName, reference: ReferenceType.MANY_TO_ONE, cascade: [Cascade.PERSIST, Cascade.MERGE] };
    meta.properties[propertyName] = Object.assign(property, options) as EntityProperty;
  };
}

export interface ManyToOneOptions extends PropertyOptions {
  entity?: () => string | Function,
  fk?: string;
  cascade?: Cascade[];
}
