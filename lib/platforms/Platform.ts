import { NamingStrategy, UnderscoreNamingStrategy } from '../naming-strategy';
import { IPrimaryKey } from '../decorators';
import { SchemaHelper } from '../schema/SchemaHelper';

export abstract class Platform {

  protected abstract schemaHelper: SchemaHelper;

  usesPivotTable(): boolean {
    return true;
  }

  supportsTransactions(): boolean {
    return true;
  }

  supportsSavePoints(): boolean {
    return false;
  }

  getNamingStrategy(): { new(): NamingStrategy} {
    return UnderscoreNamingStrategy;
  }

  getParameterPlaceholder(index?: number): string {
    return '?';
  }

  usesReturningStatement(): boolean {
    return false;
  }

  usesCascadeStatement(): boolean {
    return false;
  }

  getSchemaHelper(): SchemaHelper {
    return this.schemaHelper;
  }

  /**
   * Normalizes primary key wrapper to scalar value (e.g. mongodb's ObjectID to string)
   */
  normalizePrimaryKey<T = number | string>(data: IPrimaryKey): T {
    return data as T;
  }

  /**
   * Converts scalar primary key representation to native driver wrapper (e.g. string to mongodb's ObjectID)
   */
  denormalizePrimaryKey(data: IPrimaryKey): IPrimaryKey {
    return data;
  }

  /**
   * Used when serializing via toObject and toJSON methods, allows to use different PK field name (like `id` instead of `_id`)
   */
  getSerializedPrimaryKeyField(field: string): string {
    return field;
  }

}
