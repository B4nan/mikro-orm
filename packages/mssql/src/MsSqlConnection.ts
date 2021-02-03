import { AbstractSqlConnection, Knex, MonkeyPatchable } from '@mikro-orm/knex';

export class MsSqlConnection extends AbstractSqlConnection {

  async connect(): Promise<void> {
    this.client = this.createKnexClient(this.getPatchedDialect());

    try {
      await this.execute(`use ${this.config.get('dbName')}`);
    } catch {
      // the db might not exist
    }
  }

  getDefaultClientUrl(): string {
    return 'mssql://sa@localhost:1433';
  }

  getConnectionOptions(): Knex.MsSqlConnectionConfig {
    const config = super.getConnectionOptions() as Knex.MsSqlConnectionConfig;
    // TODO: getConnectionOptions
    const options = {
      enableArithAbort: true,
    };

    config.options = {
      ...(options as any),
      ...(config.options || {}),
    };

    // TODO is this ok? we should select the db afterwards?
    delete (config as any).database;

    return config;
  }

  protected transformRawResult<T>(res: any, method: 'all' | 'get' | 'run'): T {
    // if (!Utils.isDefined<any>(res, true)) {
    //   return res;
    // }

    console.log('TODO: transformRawResult', res, method);

    if (method === 'get') {
      return res[0];
    }

    if (method === 'all' || !res) {
      return res;
    }

    console.log('wut', {
      affectedRows: res.rowCount,
      // @ts-ignore TODO
      insertId: res[0] ? res[0].id : 0,
      // @ts-ignore TODO
      row: res[0],
      rows: res,
    });
    return {
      affectedRows: res.rowCount,
      // @ts-ignore TODO
      insertId: res[0] ? res[0].id : 0,
      // @ts-ignore TODO
      row: res[0],
      rows: res,
    } as unknown as T;

    // const [results] = res;
    // // TODO: transformRawResult
    // return results;
  }

  private getPatchedDialect() {
    const { MsSqlDialect } = MonkeyPatchable;

    const processResponse = MsSqlDialect.prototype.processResponse;
    MsSqlDialect.prototype.processResponse = (obj: any, runner: any) => {
      if (obj.method === 'insert') {
        return obj.response;
      }

      return processResponse(obj, runner);
    };

    MsSqlDialect.prototype._query = function (connection: any, obj: any) {
      if (!obj || typeof obj === 'string') {
        obj = { sql: obj };
      }

      return new Promise((resolve: any, reject) => {
        const { sql } = obj;

        if (!sql) {
          return resolve();
        }

        const req = (connection.tx_ || connection).request();
        // req.verbose = true;
        req.multiple = true; // fixme base on config? probably needed for scope_identity, but that is wrong anyway, we want to use `output` somehow

        if (obj.bindings) {
          for (let i = 0; i < obj.bindings.length; i++) {
            this._setReqInput(req, i, obj.bindings[i]);
          }
        }

        req.query(sql, (err: Error, recordset: any) => {
          if (err) {
            return reject(err);
          }

          obj.response = recordset.recordsets[0];
          resolve(obj);
        });
      });
    };

    return MsSqlDialect;
  }

  private getCallMethod(obj: any): string {
    if (obj.method === 'raw' && obj.sql.trim().match('^insert into|update|delete')) {
      return 'run';
    }

    switch (obj.method) {
      case 'insert':
      case 'update':
      case 'counter':
      case 'del':
        return 'run';
      default:
        return 'all';
    }
  }

}
