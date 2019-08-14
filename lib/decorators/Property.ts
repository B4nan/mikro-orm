import { EntityProperty, IEntity } from './Entity';
import { MetadataStorage } from '../metadata';
import { Utils } from '../utils';
import { ReferenceType } from '../entity';

export function Property(options: PropertyOptions = {}): Function {
  return function (target: IEntity, propertyName: string) {
    const meta = MetadataStorage.getMetadata(target.constructor.name);
    Utils.lookupPathFromDecorator(meta);
    options.name = options.name || propertyName;
    const prop = Object.assign({ reference: ReferenceType.SCALAR }, options) as EntityProperty;
    const desc = Object.getOwnPropertyDescriptor(target, propertyName) || {};
    prop.getter = !!desc.get;
    prop.setter = !!desc.set;

    if (desc.value instanceof Function) {
      prop.getter = true;
      prop.persist = false;
      prop.type = 'method';
      prop.getterName = propertyName;
    }

    meta.properties[prop.name] = prop;
  };
}

export type PropertyOptions = {
  name?: string;
  fieldName?: string;
  columnType?: string;
  type?: any;
  length?: any;
  onUpdate?: () => any;
  default?: any;
  unique?: boolean;
  nullable?: boolean;
  unsigned?: boolean;
  persist?: boolean;
  hidden?: boolean;
  version?: boolean;
};
