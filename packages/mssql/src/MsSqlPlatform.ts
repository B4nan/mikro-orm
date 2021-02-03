import { AbstractSqlPlatform } from '@mikro-orm/knex';
import { MsSqlSchemaHelper } from './MsSqlSchemaHelper';
import { MsSqlExceptionConverter } from './MsSqlExceptionConverter';

// TODO check what methods are needed
export class MsSqlPlatform extends AbstractSqlPlatform {

  protected readonly schemaHelper = new MsSqlSchemaHelper();
  protected readonly exceptionConverter = new MsSqlExceptionConverter();

  usesOutputStatement(): boolean {
    return true;
  }

  convertsJsonAutomatically(): boolean {
    return false;
  }

  getCurrentTimestampSQL(length: number): string {
    return `current_timestamp`; // FIXME length? or GETDATE?
  }

  getTimeTypeDeclarationSQL(): string {
    return 'time';
  }

  getRegExpOperator(): string {
    throw new Error('Not supported');
  }

  getBlobDeclarationSQL(): string {
    return 'binary';
  }

  getJsonDeclarationSQL(): string {
    return 'nvarchar(max)';
  }

  quoteIdentifier(id: string): string {
    return `[${id.replace('.', `].[`)}]`;
  }

  quoteValue(value: any): string {
    if (typeof value === 'boolean') {
      return value ? '1' : '0';
    }

    return super.quoteValue(value);
  }

}
