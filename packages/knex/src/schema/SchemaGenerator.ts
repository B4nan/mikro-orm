import { ColumnBuilder, SchemaBuilder, TableBuilder } from 'knex';
import { Cascade, CommitOrderCalculator, EntityMetadata, EntityProperty, ReferenceType, Utils } from '@mikro-orm/core';
import { Column, DatabaseSchema, DatabaseTable, IsSame } from '../index';
import { SqlEntityManager } from '../SqlEntityManager';

export class SchemaGenerator {

  private readonly config = this.em.config;
  private readonly driver = this.em.getDriver();
  private readonly metadata = this.em.getMetadata();
  private readonly platform = this.driver.getPlatform();
  private readonly helper = this.platform.getSchemaHelper()!;
  private readonly connection = this.driver.getConnection();
  private readonly knex = this.connection.getKnex();

  constructor(private readonly em: SqlEntityManager) { }

  async generate(): Promise<string> {
    const [dropSchema, createSchema] = await Promise.all([
      this.getDropSchemaSQL(false),
      this.getCreateSchemaSQL(false),
    ]);

    return this.wrapSchema(dropSchema + createSchema);
  }

  async createSchema(wrap = true): Promise<void> {
    await this.ensureDatabase();
    const sql = await this.getCreateSchemaSQL(wrap);
    await this.execute(sql);
  }

  async ensureDatabase() {
    const dbName = this.config.get('dbName')!;
    const exists = await this.helper.databaseExists(this.connection, dbName);

    if (!exists) {
      this.config.set('dbName', this.helper.getManagementDbName());
      await this.driver.reconnect();
      await this.createDatabase(dbName);
    }
  }

  async getCreateSchemaSQL(wrap = true): Promise<string> {
    const metadata = this.getOrderedMetadata();
    let ret = '';

    for (const meta of metadata) {
      ret += this.dump(this.createTable(meta));
    }

    for (const meta of metadata) {
      ret += this.dump(this.knex.schema.alterTable(meta.collection, table => this.createForeignKeys(table, meta)));
    }

    return this.wrapSchema(ret, wrap);
  }

  async dropSchema(wrap = true, dropMigrationsTable = false, dropDb = false): Promise<void> {
    if (dropDb) {
      const name = this.config.get('dbName')!;
      return this.dropDatabase(name);
    }

    const sql = await this.getDropSchemaSQL(wrap, dropMigrationsTable);
    await this.execute(sql);
  }

  async getDropSchemaSQL(wrap = true, dropMigrationsTable = false): Promise<string> {
    const metadata = this.getOrderedMetadata().reverse();
    let ret = '';

    for (const meta of metadata) {
      ret += this.dump(this.dropTable(meta.collection), '\n');
    }

    if (dropMigrationsTable) {
      ret += this.dump(this.dropTable(this.config.get('migrations').tableName!), '\n');
    }

    return this.wrapSchema(ret + '\n', wrap);
  }

  async updateSchema(wrap = true, safe = false, dropTables = true): Promise<void> {
    const sql = await this.getUpdateSchemaSQL(wrap, safe, dropTables);
    await this.execute(sql);
  }

  async getUpdateSchemaSQL(wrap = true, safe = false, dropTables = true): Promise<string> {
    const metadata = this.getOrderedMetadata();
    const schema = await DatabaseSchema.create(this.connection, this.helper, this.config);
    let ret = '';

    for (const meta of metadata) {
      ret += this.getUpdateTableSQL(meta, schema, safe);
    }

    for (const meta of metadata) {
      ret += this.getUpdateTableFKsSQL(meta, schema);
    }

    if (!dropTables || safe) {
      return this.wrapSchema(ret, wrap);
    }

    const definedTables = metadata.map(meta => meta.collection);
    const remove = schema.getTables().filter(table => !definedTables.includes(table.name));

    for (const table of remove) {
      ret += this.dump(this.dropTable(table.name));
    }

    return this.wrapSchema(ret, wrap);
  }

  /**
   * creates new database and connects to it
   */
  async createDatabase(name: string): Promise<void> {
    await this.driver.execute(this.helper.getCreateDatabaseSQL('' + this.knex.ref(name)));
    this.config.set('dbName', name);
    await this.driver.reconnect();
  }

  async dropDatabase(name: string): Promise<void> {
    this.config.set('dbName', this.helper.getManagementDbName());
    await this.driver.reconnect();
    await this.driver.execute(this.helper.getDropDatabaseSQL('' + this.knex.ref(name)));
  }

  async execute(sql: string) {
    const lines = sql.split('\n').filter(i => i.trim());

    for (const line of lines) {
      await this.driver.execute(line);
    }
  }

  private getUpdateTableSQL(meta: EntityMetadata, schema: DatabaseSchema, safe: boolean): string {
    const table = schema.getTable(meta.collection);

    if (!table) {
      return this.dump(this.createTable(meta));
    }

    return this.updateTable(meta, table, safe).map(builder => this.dump(builder)).join('\n');
  }

  private getUpdateTableFKsSQL(meta: EntityMetadata, schema: DatabaseSchema): string {
    const table = schema.getTable(meta.collection);

    if (!table) {
      return this.dump(this.knex.schema.alterTable(meta.collection, table => this.createForeignKeys(table, meta)));
    }

    const { create } = this.computeTableDifference(meta, table, true);

    if (create.length === 0) {
      return '';
    }

    return this.dump(this.knex.schema.alterTable(meta.collection, table => this.createForeignKeys(table, meta, create)));
  }

  private async wrapSchema(sql: string, wrap = true): Promise<string> {
    if (!wrap) {
      return sql;
    }

    let ret = this.helper.getSchemaBeginning(this.config.get('charset'));
    ret += sql;
    ret += this.helper.getSchemaEnd();

    return ret;
  }

  private createTable(meta: EntityMetadata): SchemaBuilder {
    return this.knex.schema.createTable(meta.collection, table => {
      Object
        .values(meta.properties)
        .filter(prop => this.shouldHaveColumn(meta, prop))
        .forEach(prop => this.createTableColumn(table, meta, prop));

      if (meta.compositePK) {
        const constraintName = meta.collection.includes('.') ? meta.collection.split('.').pop()! + '_pkey' : undefined;
        table.primary(Utils.flatten(meta.primaryKeys.map(prop => meta.properties[prop].fieldNames)), constraintName);
      }
      
      if (meta.comment) {
        table.comment(meta.comment);
      }

      const createIndex = (index: { name?: string | boolean; properties: string | string[]; type?: string }, unique: boolean) => {
        const properties = Utils.flatten(Utils.asArray(index.properties).map(prop => meta.properties[prop].fieldNames));
        const name = Utils.isString(index.name) ? index.name : this.helper.getIndexName(meta.collection, properties, unique);

        if (unique) {
          table.unique(properties, name);
        } else {
          table.index(properties, name, index.type);
        }
      };

      meta.indexes.forEach(index => createIndex(index, false));
      meta.uniques.forEach(index => createIndex(index, true));
      this.helper.finalizeTable(table, this.config.get('charset'));
    });
  }

  private updateTable(meta: EntityMetadata, table: DatabaseTable, safe: boolean): SchemaBuilder[] {
    const { create, update, remove, rename } = this.computeTableDifference(meta, table, safe);

    if (create.length + update.length + remove.length + rename.length === 0) {
      return [];
    }

    const ret: SchemaBuilder[] = [];

    for (const prop of rename) {
      ret.push(this.knex.schema.raw(this.helper.getRenameColumnSQL(table.name, prop.from, prop.to)));
    }

    ret.push(this.knex.schema.alterTable(meta.collection, t => {
      for (const prop of create) {
        this.createTableColumn(t, meta, prop);
      }

      for (const col of update) {
        this.updateTableColumn(t, meta, col.prop, col.column, col.diff);
      }

      for (const column of remove) {
        this.dropTableColumn(t, column);
      }
    }));

    return ret;
  }

  private computeTableDifference(meta: EntityMetadata, table: DatabaseTable, safe: boolean): { create: EntityProperty[]; update: { prop: EntityProperty; column: Column; diff: IsSame }[]; rename: { from: Column; to: EntityProperty }[]; remove: Column[] } {
    const props = Object.values(meta.properties).filter(prop => this.shouldHaveColumn(meta, prop, true));
    const columns = table.getColumns();
    const create: EntityProperty[] = [];
    const update: { prop: EntityProperty; column: Column; diff: IsSame }[] = [];
    const remove = columns.filter(col => !props.find(prop => prop.fieldNames.includes(col.name) || (prop.joinColumns || []).includes(col.name)));

    for (const prop of props) {
      this.computeColumnDifference(table, prop, create, update);
    }

    const rename = this.findRenamedColumns(create, remove);

    if (safe) {
      return { create, update, rename, remove: [] };
    }

    return { create, update, rename, remove };
  }

  private computeColumnDifference(table: DatabaseTable, prop: EntityProperty, create: EntityProperty[], update: { prop: EntityProperty; column: Column; diff: IsSame }[], joinColumn?: string, idx = 0): void {
    if ([ReferenceType.MANY_TO_ONE, ReferenceType.ONE_TO_ONE].includes(prop.reference) && !joinColumn) {
      return prop.joinColumns.forEach((joinColumn, idx) => this.computeColumnDifference(table, prop, create, update, joinColumn, idx));
    }

    if (!joinColumn) {
      return prop.fieldNames.forEach((fieldName, idx) => this.computeColumnDifference(table, prop, create, update, fieldName, idx));
    }

    const column = table.getColumn(joinColumn);

    if (!column) {
      create.push(prop);
      return;
    }

    if (this.helper.supportsColumnAlter() && !this.helper.isSame(prop, column, idx).all) {
      const diff = this.helper.isSame(prop, column, idx);
      update.push({ prop, column, diff });
    }
  }

  private dropTable(name: string): SchemaBuilder {
    let builder = this.knex.schema.dropTableIfExists(name);

    if (this.platform.usesCascadeStatement()) {
      builder = this.knex.schema.raw(builder.toQuery() + ' cascade');
    }

    return builder;
  }

  private shouldHaveColumn(meta: EntityMetadata, prop: EntityProperty, update = false): boolean {
    if (prop.persist === false) {
      return false;
    }

    if (meta.pivotTable) {
      return true;
    }

    if (prop.reference !== ReferenceType.SCALAR && !this.helper.supportsSchemaConstraints() && !update) {
      return false;
    }

    return [ReferenceType.SCALAR, ReferenceType.MANY_TO_ONE].includes(prop.reference) || (prop.reference === ReferenceType.ONE_TO_ONE && prop.owner);
  }

  private createTableColumn(table: TableBuilder, meta: EntityMetadata, prop: EntityProperty, alter?: IsSame): ColumnBuilder[] {
    if (prop.reference === ReferenceType.SCALAR) {
      return [this.createSimpleTableColumn(table, meta, prop, alter)];
    }

    const meta2 = this.metadata.get(prop.type);

    return meta2.primaryKeys.map((pk, idx) => {
      const col = table.specificType(prop.joinColumns[idx], meta2.properties[pk].columnTypes[0]);
      return this.configureColumn(meta, prop, col, prop.joinColumns[idx], meta2.properties[pk], alter);
    });
  }

  private createSimpleTableColumn(table: TableBuilder, meta: EntityMetadata, prop: EntityProperty, alter?: IsSame): ColumnBuilder {
    if (prop.primary && !meta.compositePK && this.platform.isBigIntProperty(prop)) {
      return table.bigIncrements(prop.fieldNames[0]);
    }

    if (prop.primary && !meta.compositePK && prop.type === 'number') {
      return table.increments(prop.fieldNames[0]);
    }

    if (prop.enum && prop.items && prop.items.every(item => Utils.isString(item))) {
      const col = table.enum(prop.fieldNames[0], prop.items!);
      return this.configureColumn(meta, prop, col, prop.fieldNames[0], undefined, alter);
    }

    const col = table.specificType(prop.fieldNames[0], prop.columnTypes[0]);
    return this.configureColumn(meta, prop, col, prop.fieldNames[0], undefined, alter);
  }

  private updateTableColumn(table: TableBuilder, meta: EntityMetadata, prop: EntityProperty, column: Column, diff: IsSame): void {
    const equalDefinition = diff.sameTypes && diff.sameDefault && diff.sameNullable;

    if (column.fk && !diff.sameIndex) {
      table.dropForeign([column.fk.columnName], column.fk.constraintName);
    }

    if (column.indexes.length > 0 && !diff.sameIndex) {
      table.dropIndex(column.indexes.map(index => index.columnName));
    }

    if (column.fk && !diff.sameIndex && equalDefinition) {
      return this.createForeignKey(table, meta, prop, diff);
    }

    this.createTableColumn(table, meta, prop, diff).map(col => col.alter());
  }

  private dropTableColumn(table: TableBuilder, column: Column): void {
    if (column.fk) {
      table.dropForeign([column.fk.columnName], column.fk.constraintName);
    }

    for (const index of column.indexes) {
      if (index.unique) {
        table.dropUnique([index.columnName], index.keyName);
      } else {
        table.dropIndex([index.columnName], index.keyName);
      }
    }

    table.dropColumn(column.name);
  }

  private configureColumn<T>(meta: EntityMetadata<T>, prop: EntityProperty<T>, col: ColumnBuilder, columnName: string, pkProp = prop, alter?: IsSame) {
    const nullable = (alter && this.platform.requiresNullableForAlteringColumn()) || prop.nullable!;
    const sameNullable = alter && 'sameNullable' in alter && alter.sameNullable;
    const indexed = 'index' in prop ? prop.index : (prop.reference !== ReferenceType.SCALAR && this.helper.indexForeignKeys());
    const index = (indexed || (prop.primary && meta.compositePK)) && !(alter?.sameIndex);
    const indexName = this.getIndexName(meta, prop, false, columnName);
    const uniqueName = this.getIndexName(meta, prop, true, columnName);
    const sameDefault = alter && 'sameDefault' in alter ? alter.sameDefault : !prop.defaultRaw;

    Utils.runIfNotEmpty(() => col.nullable(), !sameNullable && nullable);
    Utils.runIfNotEmpty(() => col.notNullable(), !sameNullable && !nullable);
    Utils.runIfNotEmpty(() => col.primary(), prop.primary && !meta.compositePK);
    Utils.runIfNotEmpty(() => col.unsigned(), pkProp.unsigned);
    Utils.runIfNotEmpty(() => col.index(indexName), index);
    Utils.runIfNotEmpty(() => col.unique(uniqueName), prop.unique);
    Utils.runIfNotEmpty(() => col.defaultTo(prop.defaultRaw ? this.knex.raw(prop.defaultRaw) : null), !sameDefault);
    Utils.runIfNotEmpty(() => col.comment(prop.comment!), prop.comment);

    return col;
  }

  private getIndexName<T>(meta: EntityMetadata<T>, prop: EntityProperty<T>, unique: boolean, columnName: string): string {
    const type = unique ? 'unique' : 'index';
    const value = prop[type];

    if (Utils.isString(value)) {
      return value;
    }

    return this.helper.getIndexName(meta.collection, [columnName], unique);
  }

  private createForeignKeys(table: TableBuilder, meta: EntityMetadata, props?: EntityProperty[]): void {
    Object.values(meta.properties)
      .filter(prop => !props || props.includes(prop))
      .filter(prop => prop.reference === ReferenceType.MANY_TO_ONE || (prop.reference === ReferenceType.ONE_TO_ONE && prop.owner))
      .forEach(prop => this.createForeignKey(table, meta, prop));
  }

  private createForeignKey(table: TableBuilder, meta: EntityMetadata, prop: EntityProperty, diff: IsSame = {}): void {
    if (this.helper.supportsSchemaConstraints()) {
      this.createForeignKeyReference(table, prop);

      return;
    }

    if (!meta.pivotTable) {
      this.createTableColumn(table, meta, prop, diff);
    }

    // knex does not allow adding new columns with FK in sqlite
    // @see https://github.com/knex/knex/issues/3351
    // const col = this.createSimpleTableColumn(table, meta, prop, true);
    // this.createForeignKeyReference(col, prop);
  }

  private createForeignKeyReference(table: TableBuilder, prop: EntityProperty): void {
    const cascade = prop.cascade.includes(Cascade.REMOVE) || prop.cascade.includes(Cascade.ALL);
    const col = table.foreign(prop.fieldNames).references(prop.referencedColumnNames).inTable(prop.referencedTableName);

    if (prop.onDelete || cascade || prop.nullable) {
      col.onDelete(prop.onDelete || (cascade ? 'cascade' : 'set null'));
    }

    if (prop.onUpdateIntegrity || prop.cascade.includes(Cascade.PERSIST) || prop.cascade.includes(Cascade.ALL)) {
      col.onUpdate(prop.onUpdateIntegrity || 'cascade');
    }
  }

  private findRenamedColumns(create: EntityProperty[], remove: Column[]): { from: Column; to: EntityProperty }[] {
    const renamed: { from: Column; to: EntityProperty }[] = [];

    for (const prop of create) {
      for (const fieldName of prop.fieldNames) {
        const match = remove.find(column => {
          const copy = Utils.copy(column);
          copy.name = fieldName;

          return this.helper.isSame(prop, copy).all;
        });

        if (match) {
          renamed.push({ from: match, to: prop });
        }
      }
    }

    renamed.forEach(prop => {
      create.splice(create.indexOf(prop.to), 1);
      remove.splice(remove.indexOf(prop.from), 1);
    });

    return renamed;
  }

  private getOrderedMetadata(): EntityMetadata[] {
    const metadata = Object.values(this.metadata.getAll()).filter(meta => !meta.discriminatorValue && !meta.embeddable);
    const calc = new CommitOrderCalculator();
    metadata.forEach(meta => calc.addNode(meta.name));
    let meta = metadata.pop();

    while (meta) {
      for (const prop of Object.values(meta.properties)) {
        if (!calc.hasNode(prop.type)) {
          continue;
        }

        this.addCommitDependency(calc, prop, meta.name);
      }

      meta = metadata.pop();
    }

    return calc.sort().map(cls => this.metadata.get(cls));
  }

  private addCommitDependency(calc: CommitOrderCalculator, prop: EntityProperty, entityName: string): void {
    if (!(prop.reference === ReferenceType.ONE_TO_ONE && prop.owner) && prop.reference !== ReferenceType.MANY_TO_ONE) {
      return;
    }

    calc.addDependency(prop.type, entityName, prop.nullable ? 0 : 1);
  }

  private dump(builder: SchemaBuilder, append = '\n\n'): string {
    const sql = builder.toQuery();
    return sql.length > 0 ? `${sql};${append}` : '';
  }

}
