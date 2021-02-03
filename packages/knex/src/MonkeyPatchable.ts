// @ts-ignore
import MySqlDialect from 'knex/lib/dialects/mysql';
// @ts-ignore
import PostgresDialectTableCompiler from 'knex/lib/dialects/postgres/schema/tablecompiler';
// @ts-ignore
import MsSqlDialect from 'knex/lib/dialects/mssql';
// @ts-ignore
import Sqlite3Dialect from 'knex/lib/dialects/sqlite3';
// @ts-ignore
import TableCompiler from 'knex/lib/schema/tablecompiler';

// These specific portions of knex are overridden by the different
// database packages. We need to be sure the knex files they get to
// monkey patch are the same version as our overall knex instance
// which is why we need to import them in this package.
export const MonkeyPatchable = {
  MySqlDialect,
  MsSqlDialect,
  PostgresDialectTableCompiler,
  Sqlite3Dialect,
  TableCompiler,
};
