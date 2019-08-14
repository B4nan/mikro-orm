export class DatabaseTable {

  private columns: Record<string, Column>;
  private indexes: Record<string, Index[]>;
  private foreignKeys: Record<string, ForeignKey>;

  constructor(readonly name: string,
              readonly schema?: string) { }

  getColumns(): Column[] {
    return Object.values(this.columns);
  }

  getColumn(name: string): Column | undefined {
    return this.columns[name];
  }

  init(cols: Column[], indexes: Record<string, Index[]>, pks: string[], fks: Record<string, ForeignKey>): void {
    this.indexes = indexes;
    this.foreignKeys = fks;
    this.columns = cols.reduce((o, v) => {
      const index = indexes[v.name] || [];
      v.primary = pks.includes(v.name);
      v.unique = index.some(i => i.unique);
      v.fk = fks[v.name];
      v.indexes = index.filter(i => !i.primary);
      o[v.name] = v;

      return o;
    }, {} as any);
  }

}

export interface Column {
  name: string;
  type: string;
  fk: ForeignKey;
  indexes: Index[];
  primary: boolean;
  unique: boolean;
  nullable: boolean;
  maxLength: number;
  defaultValue: string;
}

export interface ForeignKey {
  columnName: string;
  constraintName: string;
  referencedTableName: string;
  referencedColumnName: string;
  updateRule: string;
  deleteRule: string;
}

export interface Index {
  columnName: string;
  keyName: string;
  unique: boolean;
  primary: boolean;
}
