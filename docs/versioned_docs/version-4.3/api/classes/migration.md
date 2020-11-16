---
id: "migration"
title: "Class: Migration"
sidebar_label: "Migration"
---

## Hierarchy

* **Migration**

## Constructors

### constructor

\+ **new Migration**(`driver`: AbstractSqlDriver, `config`: Configuration): [Migration](migration.md)

*Defined in [packages/migrations/src/Migration.ts:9](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/Migration.ts#L9)*

#### Parameters:

Name | Type |
------ | ------ |
`driver` | AbstractSqlDriver |
`config` | Configuration |

**Returns:** [Migration](migration.md)

## Properties

### config

• `Protected` `Readonly` **config**: Configuration

*Defined in [packages/migrations/src/Migration.ts:12](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/Migration.ts#L12)*

___

### ctx

• `Protected` `Optional` **ctx**: Transaction&#60;Transaction>

*Defined in [packages/migrations/src/Migration.ts:9](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/Migration.ts#L9)*

___

### driver

• `Protected` `Readonly` **driver**: AbstractSqlDriver

*Defined in [packages/migrations/src/Migration.ts:11](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/Migration.ts#L11)*

___

### queries

• `Private` `Readonly` **queries**: [Query](../index.md#query)[] = []

*Defined in [packages/migrations/src/Migration.ts:8](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/Migration.ts#L8)*

## Methods

### addSql

▸ **addSql**(`sql`: [Query](../index.md#query)): void

*Defined in [packages/migrations/src/Migration.ts:24](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/Migration.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`sql` | [Query](../index.md#query) |

**Returns:** void

___

### down

▸ **down**(): Promise&#60;void>

*Defined in [packages/core/src/typings.ts:348](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/typings.ts#L348)*

**Returns:** Promise&#60;void>

___

### execute

▸ **execute**(`sql`: [Query](../index.md#query)): Promise&#60;[EntityData](../index.md#entitydata)&#60;[AnyEntity](../index.md#anyentity)&#60;any>>[]>

*Defined in [packages/migrations/src/Migration.ts:37](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/Migration.ts#L37)*

#### Parameters:

Name | Type |
------ | ------ |
`sql` | [Query](../index.md#query) |

**Returns:** Promise&#60;[EntityData](../index.md#entitydata)&#60;[AnyEntity](../index.md#anyentity)&#60;any>>[]>

___

### getKnex

▸ **getKnex**(): any

*Defined in [packages/migrations/src/Migration.ts:41](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/Migration.ts#L41)*

**Returns:** any

___

### getQueries

▸ **getQueries**(): [Query](../index.md#query)[]

*Defined in [packages/migrations/src/Migration.ts:45](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/Migration.ts#L45)*

**Returns:** [Query](../index.md#query)[]

___

### isTransactional

▸ **isTransactional**(): boolean

*Defined in [packages/migrations/src/Migration.ts:20](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/Migration.ts#L20)*

**Returns:** boolean

___

### reset

▸ **reset**(): void

*Defined in [packages/migrations/src/Migration.ts:28](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/Migration.ts#L28)*

**Returns:** void

___

### setTransactionContext

▸ **setTransactionContext**(`ctx`: [Transaction](../index.md#transaction)): void

*Defined in [packages/migrations/src/Migration.ts:33](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/Migration.ts#L33)*

#### Parameters:

Name | Type |
------ | ------ |
`ctx` | [Transaction](../index.md#transaction) |

**Returns:** void

___

### up

▸ `Abstract`**up**(): Promise&#60;void>

*Defined in [packages/core/src/typings.ts:347](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/typings.ts#L347)*

**Returns:** Promise&#60;void>

▸ `Abstract`**up**(): Promise&#60;void>

*Defined in [packages/migrations/src/Migration.ts:14](https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/Migration.ts#L14)*

**Returns:** Promise&#60;void>
