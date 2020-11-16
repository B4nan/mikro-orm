import { Reference } from './Reference';
import { AnyEntity, Dictionary, EntityData, IWrappedEntity, Populate } from '../typings';
import { AssignOptions, EntityAssigner } from './EntityAssigner';

export abstract class BaseEntity<T extends AnyEntity<T>, PK extends keyof T, P extends Populate<T> | unknown = unknown> implements IWrappedEntity<T, PK, P> {

  constructor() {
    Object.defineProperty(this, '__baseEntity', { value: true });
  }

  isInitialized(): boolean {
    return (this as unknown as T).__helper!.__initialized;
  }

  populated(populated = true): void {
    (this as unknown as T).__helper!.populated(populated);
  }

  toReference() {
    return Reference.create(this) as any; // maintain the type from IWrappedEntity
  }

  toObject(ignoreFields: string[] = []): Dictionary {
    return (this as unknown as T).__helper!.toObject(ignoreFields) as EntityData<T>;
  }

  toJSON(...args: any[]): Dictionary {
    return this.toObject(...args);
  }

  assign(data: EntityData<T>, options?: AssignOptions): T {
    return EntityAssigner.assign(this as unknown as T, data, options);
  }

  init(populated = true): Promise<T> {
    return (this as unknown as T).__helper!.init(populated);
  }

}
