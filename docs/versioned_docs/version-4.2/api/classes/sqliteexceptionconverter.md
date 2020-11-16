---
id: "sqliteexceptionconverter"
title: "Class: SqliteExceptionConverter"
sidebar_label: "SqliteExceptionConverter"
---

## Hierarchy

* ExceptionConverter

  ↳ **SqliteExceptionConverter**

## Methods

### convertException

▸ **convertException**(`exception`: [Error](driverexception.md#error) & [Dictionary](../index.md#dictionary)): DriverException

*Overrides void*

*Defined in [packages/sqlite/src/SqliteExceptionConverter.ts:14](https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/sqlite/src/SqliteExceptionConverter.ts#L14)*

**`inheritdoc`** 

**`link`** http://www.sqlite.org/c3ref/c_abort.html

**`link`** https://github.com/doctrine/dbal/blob/master/src/Driver/AbstractSQLiteDriver.php

#### Parameters:

Name | Type |
------ | ------ |
`exception` | [Error](driverexception.md#error) & [Dictionary](../index.md#dictionary) |

**Returns:** DriverException
