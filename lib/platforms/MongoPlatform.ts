import { ObjectId } from 'mongodb';
import { Platform } from './Platform';
import { MongoNamingStrategy, NamingStrategy } from '../naming-strategy';
import { IPrimaryKey } from '../decorators';
import { SchemaHelper } from '../schema';

export class MongoPlatform extends Platform {

  protected readonly schemaHelper?: SchemaHelper;

  usesPivotTable(): boolean {
    return false;
  }

  supportsTransactions(): boolean {
    return false;
  }

  getNamingStrategy(): { new(): NamingStrategy} {
    return MongoNamingStrategy;
  }

  normalizePrimaryKey<T = number | string>(data: IPrimaryKey | ObjectId): T {
    if (data instanceof ObjectId) {
      return data.toHexString() as unknown as T;
    }

    return data as unknown as T;
  }

  denormalizePrimaryKey(data: number | string): IPrimaryKey {
    return new ObjectId(data);
  }

  getSerializedPrimaryKeyField(field: string): string {
    return 'id';
  }

}
