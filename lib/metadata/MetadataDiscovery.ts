import { sync as globby } from 'globby';

import { EntityClass, EntityClassGroup, EntityMetadata, EntityProperty, IEntityType } from '../decorators';
import { EntityManager } from '../EntityManager';
import { Configuration, Logger, Utils } from '../utils';
import { MetadataValidator } from './MetadataValidator';
import { MetadataStorage } from './MetadataStorage';
import { Cascade, EntityHelper, ReferenceType } from '../entity';

export class MetadataDiscovery {

  private readonly metadata = MetadataStorage.getMetadata();
  private readonly namingStrategy = this.config.getNamingStrategy();
  private readonly metadataProvider = this.config.getMetadataProvider();
  private readonly cache = this.config.getCacheAdapter();
  private readonly platform = this.em.getDriver().getPlatform();
  private readonly validator = new MetadataValidator();
  private readonly discovered: EntityMetadata[] = [];

  constructor(private readonly em: EntityManager,
              private readonly config: Configuration,
              private readonly logger: Logger) { }

  async discover(): Promise<Record<string, EntityMetadata>> {
    const startTime = Date.now();
    this.logger.debug(`ORM entity discovery started`);
    this.discovered.length = 0;

    if (this.config.get('entities').length > 0) {
      await Promise.all(this.config.get('entities').map(entity => this.discoverEntity(entity)));
    } else if (process.argv[0].endsWith('ts-node')) {
      await Promise.all(this.config.get('entitiesDirsTs').map(dir => this.discoverDirectory(dir)));
    } else {
      await Promise.all(this.config.get('entitiesDirs').map(dir => this.discoverDirectory(dir)));
    }

    // ignore base entities (not annotated with @Entity)
    const filtered = this.discovered.filter(meta => meta.name);
    filtered.forEach(meta => this.defineBaseEntityProperties(meta));
    filtered.forEach(meta => this.discovered.push(...this.processEntity(meta)));

    const diff = Date.now() - startTime;
    this.logger.debug(`- entity discovery finished after ${diff} ms`);

    const discovered: Record<string, EntityMetadata> = {};
    this.discovered
      .filter(meta => meta.name)
      .forEach(meta => discovered[meta.name] = meta );

    return discovered;
  }

  private async discoverDirectory(basePath: string): Promise<void> {
    const files = globby('*', { cwd: `${this.config.get('baseDir')}/${basePath}` });
    this.logger.debug(`- processing ${files.length} files from directory ${basePath}`);

    for (const file of files) {
      if (
        !file.match(/\.[jt]s$/) ||
        file.endsWith('.js.map') ||
        file.endsWith('.d.ts') ||
        file.startsWith('.') ||
        file.match(/index\.[jt]s$/)
      ) {
        this.logger.debug(`- ignoring file ${file}`);
        continue;
      }

      const name = this.getClassName(file);
      const path = `${this.config.get('baseDir')}/${basePath}/${file}`;
      const target = require(path)[name]; // include the file to trigger loading of metadata
      await this.discoverEntity(target, path);
    }
  }

  private async discoverEntity<T extends IEntityType<T>>(entity: EntityClass<T> | EntityClassGroup<T>, path?: string): Promise<void> {
    entity = this.metadataProvider.prepare(entity);
    this.logger.debug(`- processing entity ${entity.name}`);

    const meta = MetadataStorage.getMetadata(entity.name);
    const cache = this.cache.get(entity.name);
    meta.prototype = entity.prototype;
    meta.path = path || meta.path;
    meta.toJsonParams = Utils.getParamNames(entity.prototype.toJSON || '');

    if (cache) {
      this.logger.debug(`- using cached metadata for entity ${entity.name}`);
      this.metadataProvider.loadFromCache(meta, cache);
      this.discovered.push(meta);

      return;
    }

    await this.metadataProvider.loadEntityMetadata(meta, entity.name);

    if (!meta.collection && meta.name) {
      meta.collection = this.namingStrategy.classToTableName(meta.name);
    }

    this.saveToCache(meta, entity);
    this.discovered.push(meta);
  }

  private saveToCache<T extends IEntityType<T>>(meta: EntityMetadata, entity: EntityClass<T>): void {
    const copy = Object.assign({}, meta);
    delete copy.prototype;

    // base entity without properties might not have path, but nothing to cache there
    if (meta.path) {
      this.cache.set(entity.name, copy, meta.path);
    }
  }

  private applyNamingStrategy(meta: EntityMetadata, prop: EntityProperty): void {
    if (prop.reference === ReferenceType.MANY_TO_ONE && !prop.fk) {
      prop.fk = meta.properties[meta.primaryKey].fieldName;
    }

    if (!prop.fieldName) {
      this.initFieldName(prop);
    }

    if (prop.reference === ReferenceType.MANY_TO_MANY) {
      this.initManyToManyFields(meta, prop);
    }

    if (prop.reference === ReferenceType.ONE_TO_MANY) {
      this.initOneToManyFields(meta, prop);
    }
  }

  private initFieldName(prop: EntityProperty): void {
    if (prop.reference === ReferenceType.SCALAR) {
      prop.fieldName = this.namingStrategy.propertyToColumnName(prop.name);
    } else if (prop.reference === ReferenceType.MANY_TO_ONE) {
      prop.fieldName = this.initManyToOneFieldName(prop, prop.name);
    } else if (prop.reference === ReferenceType.MANY_TO_MANY && prop.owner) {
      prop.fieldName = this.namingStrategy.propertyToColumnName(prop.name);
    }
  }

  private initManyToOneFieldName(prop: EntityProperty, name: string): string {
    const meta2 = this.metadata[prop.type];
    const referenceColumnName = meta2.properties[meta2.primaryKey].fieldName;

    return this.namingStrategy.joinKeyColumnName(name, referenceColumnName);
  }

  private initManyToManyFields(meta: EntityMetadata, prop: EntityProperty): void {
    if (!prop.pivotTable && prop.owner) {
      prop.pivotTable = this.namingStrategy.joinTableName(meta.name, prop.type, prop.name);
    }

    if (!prop.referenceColumnName) {
      prop.referenceColumnName = meta.properties[meta.primaryKey].fieldName;
    }

    if (!prop.inverseJoinColumn) {
      prop.inverseJoinColumn = this.initManyToOneFieldName(prop, prop.type);
    }

    if (!prop.joinColumn) {
      prop.joinColumn = this.namingStrategy.joinKeyColumnName(meta.name, prop.referenceColumnName);
    }
  }

  private initOneToManyFields(meta: EntityMetadata, prop: EntityProperty): void {
    if (!prop.joinColumn && prop.reference === ReferenceType.ONE_TO_MANY) {
      prop.joinColumn = this.namingStrategy.joinColumnName(prop.name);
    }

    if (!prop.referenceColumnName) {
      prop.referenceColumnName = meta.properties[meta.primaryKey].fieldName;
    }
  }

  private processEntity(meta: EntityMetadata): EntityMetadata[] {
    this.defineBaseEntityProperties(meta);
    this.validator.validateEntityDefinition(this.metadata, meta.name);
    Object.values(meta.properties).forEach(prop => this.applyNamingStrategy(meta, prop));
    meta.serializedPrimaryKey = this.platform.getSerializedPrimaryKeyField(meta.primaryKey);

    if (!Utils.isEntity(meta.prototype)) {
      EntityHelper.decorate(meta, this.em);
    }

    const ret: EntityMetadata[] = [];

    if (this.platform.usesPivotTable()) {
      Object.values(meta.properties).forEach(prop => {
        const pivotMeta = this.definePivotTableEntity(meta, prop);

        if (pivotMeta) {
          ret.push(pivotMeta);
        }
      });
    }

    return ret;
  }

  private definePivotTableEntity(meta: EntityMetadata, prop: EntityProperty): EntityMetadata | undefined {
    if (prop.reference === ReferenceType.MANY_TO_MANY && prop.owner && prop.pivotTable) {
      const pk = this.namingStrategy.referenceColumnName();
      const primaryProp = { name: pk, type: 'number', reference: ReferenceType.SCALAR, primary: true } as EntityProperty;
      this.initFieldName(primaryProp);

      return this.metadata[prop.pivotTable] = {
        name: prop.pivotTable,
        collection: prop.pivotTable,
        primaryKey: pk,
        properties: {
          [pk]: primaryProp,
          [meta.name]: this.definePivotProperty(prop, meta.name),
          [prop.type]: this.definePivotProperty(prop, prop.type),
        },
      } as EntityMetadata;
    }
  }

  private definePivotProperty(prop: EntityProperty, name: string): EntityProperty {
    const ret = { name, type: name, reference: ReferenceType.MANY_TO_ONE, cascade: [Cascade.PERSIST, Cascade.REMOVE] } as EntityProperty;

    if (name === prop.type) {
      const meta = this.metadata[name];
      const prop2 = meta.properties[meta.primaryKey];

      if (!prop2.fieldName) {
        this.initFieldName(prop2);
      }

      ret.referenceColumnName = prop2.fieldName;
      ret.fieldName = ret.joinColumn = prop.inverseJoinColumn;
      ret.inverseJoinColumn = prop.joinColumn;
    } else {
      ret.referenceColumnName = prop.referenceColumnName;
      ret.fieldName = ret.joinColumn = prop.joinColumn;
      ret.inverseJoinColumn = prop.inverseJoinColumn;
    }

    return ret;
  }

  private getClassName(file: string): string {
    const name = file.split('.')[0];
    const ret = name.replace(/-(\w)/, m => m[1].toUpperCase());

    return ret.charAt(0).toUpperCase() + ret.slice(1);
  }

  private defineBaseEntityProperties(meta: EntityMetadata): void {
    const base = this.metadata[meta.extends];

    if (!meta.extends || !base) {
      return;
    }

    meta.properties = { ...base.properties, ...meta.properties };
    const primary = Object.values(meta.properties).find(p => p.primary);

    if (primary && !meta.primaryKey) {
      meta.primaryKey = primary.name;
    }
  }

}
