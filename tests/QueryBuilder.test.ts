import { Author2, Book2, BookTag2, Publisher2, PublisherType, Test2 } from './entities-sql';
import { initORMMySql } from './bootstrap';
import { MikroORM, QueryOrder } from '../lib';

/**
 * @class QueryBuilderTest
 */
describe('QueryBuilder', () => {

  let orm: MikroORM;

  beforeAll(async () => orm = await initORMMySql());

  test('select query', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2);
    qb.select('*').where({ name: 'test 123', type: PublisherType.GLOBAL }).orderBy({ name: QueryOrder.DESC, type: QueryOrder.ASC }).limit(2, 1);
    expect(qb.getQuery()).toEqual('SELECT `e0`.* FROM `publisher2` AS `e0` WHERE `e0`.`name` = ? AND `e0`.`type` = ? ORDER BY `e0`.`name` DESC, `e0`.`type` ASC LIMIT ? OFFSET ?');
    expect(qb.getParams()).toEqual(['test 123', PublisherType.GLOBAL, 2, 1]);
  });

  test('select in query', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2);
    qb.select(['id', 'name', 'type']).where({ name: { $in: ['test 123', 'lol 321'] }, type: PublisherType.GLOBAL }).limit(2, 1);
    expect(qb.getQuery()).toEqual('SELECT `e0`.`id`, `e0`.`name`, `e0`.`type` FROM `publisher2` AS `e0` WHERE `e0`.`name` IN (?, ?) AND `e0`.`type` = ? LIMIT ? OFFSET ?');
    expect(qb.getParams()).toEqual(['test 123', 'lol 321', PublisherType.GLOBAL, 2, 1]);
  });

  test('select with boolean', async () => {
    const qb = orm.em.createQueryBuilder(Author2);
    qb.select('*').where({ termsAccepted: false });
    expect(qb.getQuery()).toEqual('SELECT `e0`.* FROM `author2` AS `e0` WHERE `e0`.`terms_accepted` = ?');
    expect(qb.getParams()).toEqual([false]);
  });

  test('select by regexp', async () => {
    let qb = orm.em.createQueryBuilder(Publisher2);
    qb.select('*').where({ name: /test/ });
    expect(qb.getQuery()).toEqual('SELECT `e0`.* FROM `publisher2` AS `e0` WHERE `e0`.`name` LIKE ?');
    expect(qb.getParams()).toEqual(['%test%']);

    qb = orm.em.createQueryBuilder(Publisher2);
    qb.select('*').where({ name: /^test/ });
    expect(qb.getQuery()).toEqual('SELECT `e0`.* FROM `publisher2` AS `e0` WHERE `e0`.`name` LIKE ?');
    expect(qb.getParams()).toEqual(['test%']);

    qb = orm.em.createQueryBuilder(Publisher2);
    qb.select('*').where({ name: /t.st$/ });
    expect(qb.getQuery()).toEqual('SELECT `e0`.* FROM `publisher2` AS `e0` WHERE `e0`.`name` LIKE ?');
    expect(qb.getParams()).toEqual(['%t_st']);

    qb = orm.em.createQueryBuilder(Publisher2);
    qb.select('*').where({ name: /^c.o.*l-te.*st\.c.m$/ });
    expect(qb.getQuery()).toEqual('SELECT `e0`.* FROM `publisher2` AS `e0` WHERE `e0`.`name` LIKE ?');
    expect(qb.getParams()).toEqual(['c_o%l-te%st.c_m']);
  });

  test('select by m:1', async () => {
    const qb = orm.em.createQueryBuilder(Author2);
    qb.select('*').where({ favouriteBook: 123 });
    expect(qb.getQuery()).toEqual('SELECT `e0`.* FROM `author2` AS `e0` WHERE `e0`.`favourite_book_uuid_pk` = ?');
    expect(qb.getParams()).toEqual([123]);
  });

  test('select by 1:m', async () => {
    const qb = orm.em.createQueryBuilder(Author2);
    qb.select('*').where({ books: { $in: [123, 321] } });
    expect(qb.getQuery()).toEqual('SELECT `e0`.* FROM `author2` AS `e0` LEFT JOIN `book2` AS `e1` ON `e0`.`id` = `e1`.`author_id` WHERE `e1`.`id` IN (?, ?)');
    expect(qb.getParams()).toEqual([123, 321]);
  });

  test('select by m:n', async () => {
    const qb = orm.em.createQueryBuilder(Book2);
    qb.select('*').where({ tags: 123 });
    expect(qb.getQuery()).toEqual('SELECT `e0`.*, `e1`.`book2_uuid_pk`, `e1`.`book_tag2_id` FROM `book2` AS `e0` LEFT JOIN `book2_to_book_tag2` AS `e1` ON `e0`.`uuid_pk` = `e1`.`book2_uuid_pk` WHERE `e1`.`book_tag2_id` = ?');
    expect(qb.getParams()).toEqual([123]);
  });

  test('select by m:n inversed', async () => {
    const qb = orm.em.createQueryBuilder(BookTag2);
    qb.select('*').where({ books: 123 });
    expect(qb.getQuery()).toEqual('SELECT `e0`.*, `e1`.`book_tag2_id`, `e1`.`book2_uuid_pk` FROM `book_tag2` AS `e0` LEFT JOIN `book2_to_book_tag2` AS `e1` ON `e0`.`id` = `e1`.`book_tag2_id` WHERE `e1`.`book2_uuid_pk` = ?');
    expect(qb.getParams()).toEqual([123]);
  });

  test('select by m:n with populate', async () => {
    const qb = orm.em.createQueryBuilder(Test2);
    qb.select('*').populate(['publisher2_to_test2']).where({ publisher2_id: { $in: [ 1, 2 ] } }).orderBy({ ['publisher2_to_test2.id']: QueryOrder.ASC });
    let sql = 'SELECT `e0`.*, `e1`.`test2_id`, `e1`.`publisher2_id` FROM `test2` AS `e0`';
    sql += ' LEFT JOIN `publisher2_to_test2` AS `e1` ON `e0`.`id` = `e1`.`test2_id`';
    sql += ' WHERE `e1`.`publisher2_id` IN (?, ?)';
    sql += ' ORDER BY `e1`.`id` ASC';
    expect(qb.getQuery()).toEqual(sql);
    expect(qb.getParams()).toEqual([1, 2]);
  });

  test('select by m:n with unknown populate ignored', async () => {
    const qb = orm.em.createQueryBuilder(Test2);
    qb.select('*').populate(['not_existing']);
    expect(qb.getQuery()).toEqual('SELECT `e0`.* FROM `test2` AS `e0`');
    expect(qb.getParams()).toEqual([]);
  });

  test('select with operator (simple)', async () => {
    const qb = orm.em.createQueryBuilder(Test2);
    qb.select('*').where({ id: { $nin: [3, 4] } });
    expect(qb.getQuery()).toEqual('SELECT `e0`.* FROM `test2` AS `e0` WHERE `e0`.`id` NOT IN (?, ?)');
    expect(qb.getParams()).toEqual([3, 4]);
  });

  test('select with operator (wrapped)', async () => {
    const qb1 = orm.em.createQueryBuilder(Test2);
    qb1.select('*').where({ $and: [{ id: { $nin: [3, 4] } }, { id: { $gt: 2 } }] });
    expect(qb1.getQuery()).toEqual('SELECT `e0`.* FROM `test2` AS `e0` WHERE (`e0`.`id` NOT IN (?, ?) AND `e0`.`id` > ?)');
    expect(qb1.getParams()).toEqual([3, 4, 2]);

    const qb2 = orm.em.createQueryBuilder(Test2);
    qb2.select('*').where({ id: { $nin: [3, 4], $gt: 2 } });
    expect(qb2.getQuery()).toEqual(qb1.getQuery());
    expect(qb2.getParams()).toEqual(qb1.getParams());
  });

  test('select with operator (NOT)', async () => {
    const qb = orm.em.createQueryBuilder(Test2);
    qb.select('*').where({ $not: { id: { $in: [3, 4] } } });
    expect(qb.getQuery()).toEqual('SELECT `e0`.* FROM `test2` AS `e0` WHERE NOT (`e0`.`id` IN (?, ?))');
    expect(qb.getParams()).toEqual([3, 4]);
  });

  test('select with operator (AND)', async () => {
    const qb = orm.em.createQueryBuilder(Test2);
    qb.select('*').where({ $and: [
      { id: { $in: [1, 2, 7] }, },
      { id: { $nin: [3, 4] }, },
      { id: { $gt: 5 }, },
      { id: { $lt: 10 }, },
      { id: { $gte: 7 }, },
      { id: { $lte: 8 }, },
      { id: { $ne: 9 }, },
      { $not: { id: { $eq: 10 } } },
    ] });
    expect(qb.getQuery()).toEqual('SELECT `e0`.* FROM `test2` AS `e0` ' +
      'WHERE (`e0`.`id` IN (?, ?, ?) ' +
      'AND `e0`.`id` NOT IN (?, ?) ' +
      'AND `e0`.`id` > ? ' +
      'AND `e0`.`id` < ? ' +
      'AND `e0`.`id` >= ? ' +
      'AND `e0`.`id` <= ? ' +
      'AND `e0`.`id` != ? ' +
      'AND NOT (`e0`.`id` = ?))');
    expect(qb.getParams()).toEqual([1, 2, 7, 3, 4, 5, 10, 7, 8, 9, 10]);
  });

  test('select with operator (OR)', async () => {
    const qb = orm.em.createQueryBuilder(Test2);
    qb.select('*').where({ $or: [
      { id: { $in: [1, 2, 7] }, },
      { id: { $nin: [3, 4] }, },
      { id: { $gt: 5 }, },
      { id: { $lt: 10 }, },
      { id: { $gte: 7 }, },
      { id: { $lte: 8 }, },
      { id: { $ne: 9 }, },
      { $not: { id: { $eq: 10 } } },
    ] });
    expect(qb.getQuery()).toEqual('SELECT `e0`.* FROM `test2` AS `e0` ' +
      'WHERE (`e0`.`id` IN (?, ?, ?) ' +
      'OR `e0`.`id` NOT IN (?, ?) ' +
      'OR `e0`.`id` > ? ' +
      'OR `e0`.`id` < ? ' +
      'OR `e0`.`id` >= ? ' +
      'OR `e0`.`id` <= ? ' +
      'OR `e0`.`id` != ? ' +
      'OR NOT (`e0`.`id` = ?))');
    expect(qb.getParams()).toEqual([1, 2, 7, 3, 4, 5, 10, 7, 8, 9, 10]);
  });

  test('select count query', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2);
    qb.count().where({ name: 'test 123', type: PublisherType.GLOBAL });
    expect(qb.getQuery()).toEqual('SELECT COUNT(`e0`.`id`) AS `count` FROM `publisher2` AS `e0` WHERE `e0`.`name` = ? AND `e0`.`type` = ?');
    expect(qb.getParams()).toEqual(['test 123', PublisherType.GLOBAL]);
  });

  test('select count distinct query', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2);
    qb.count('id', true).where({ name: 'test 123', type: PublisherType.GLOBAL });
    expect(qb.getQuery()).toEqual('SELECT COUNT(DISTINCT `e0`.`id`) AS `count` FROM `publisher2` AS `e0` WHERE `e0`.`name` = ? AND `e0`.`type` = ?');
    expect(qb.getParams()).toEqual(['test 123', PublisherType.GLOBAL]);
  });

  test('insert query', async () => {
    const qb1 = orm.em.createQueryBuilder(Publisher2);
    qb1.insert({ name: 'test 123', type: PublisherType.GLOBAL });
    expect(qb1.getQuery()).toEqual('INSERT INTO `publisher2` (`name`, `type`) VALUES (?, ?)');
    expect(qb1.getParams()).toEqual(['test 123', PublisherType.GLOBAL]);

    const qb2 = orm.em.createQueryBuilder(Author2);
    qb2.insert({ name: 'test 123', favouriteBook: 2359, termsAccepted: true });
    expect(qb2.getQuery()).toEqual('INSERT INTO `author2` (`name`, `favourite_book_uuid_pk`, `terms_accepted`) VALUES (?, ?, ?)');
    expect(qb2.getParams()).toEqual(['test 123', 2359, true]);

    const qb3 = orm.em.createQueryBuilder(BookTag2);
    qb3.insert({ books: 123 });
    expect(qb3.getQuery()).toEqual('INSERT INTO `book_tag2` (`books`) VALUES (?)');
    expect(qb3.getParams()).toEqual([123]);
  });

  test('update query', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2);
    qb.update({ name: 'test 123', type: PublisherType.GLOBAL }).where({ id: 123, type: PublisherType.LOCAL });
    expect(qb.getQuery()).toEqual('UPDATE `publisher2` SET `name` = ?, `type` = ? WHERE `id` = ? AND `type` = ?');
    expect(qb.getParams()).toEqual(['test 123', PublisherType.GLOBAL, 123, PublisherType.LOCAL]);
  });

  test('delete query', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2);
    qb.delete({ name: 'test 123', type: PublisherType.GLOBAL });
    expect(qb.getQuery()).toEqual('DELETE FROM `publisher2` WHERE `name` = ? AND `type` = ?');
    expect(qb.getParams()).toEqual(['test 123', PublisherType.GLOBAL]);
  });

  afterAll(async () => orm.close(true));

});
