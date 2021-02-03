import { AnyEntity, Configuration, EntityData, QueryResult, Transaction } from '@mikro-orm/core';
import { AbstractSqlDriver, Knex } from '@mikro-orm/knex';
import { MsSqlConnection } from './MsSqlConnection';
import { MsSqlPlatform } from './MsSqlPlatform';

export class MsSqlDriver extends AbstractSqlDriver<MsSqlConnection> {

  constructor(config: Configuration) {
    super(config, new MsSqlPlatform(), MsSqlConnection, ['knex', 'mssql']);
  }

}
