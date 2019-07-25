import { Author2, Book2, BookTag2, FooBar2, FooBaz2, Publisher2, PublisherType, Test2 } from './entities-sql';
import { initORMMySql } from './bootstrap';
import { LockMode, MikroORM, QueryOrder } from '../lib';

/**
 * @class QueryBuilderTest
 */
describe('QueryBuilder', () => {

  let orm: MikroORM;

  beforeAll(async () => orm = await initORMMySql());

  test('select query', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2);
    qb.select('*').where({ name: 'test 123', type: PublisherType.GLOBAL }).orderBy({ name: QueryOrder.DESC, type: QueryOrder.ASC }).limit(2, 1);
    expect(qb.getQuery()).toEqual('select `e0`.* from `publisher2` as `e0` where `e0`.`name` = ? and `e0`.`type` = ? order by `e0`.`name` desc, `e0`.`type` asc limit ? offset ?');
    expect(qb.getParams()).toEqual(['test 123', PublisherType.GLOBAL, 2, 1]);
  });

  test('select where is null', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2);
    qb.select('*').where({ type: null }).limit(2, 1);
    expect(qb.getQuery()).toEqual('select `e0`.* from `publisher2` as `e0` where `e0`.`type` is null limit ? offset ?');
    expect(qb.getParams()).toEqual([2, 1]);
  });

  test('select query with order by variants', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2);
    qb.select('*').where({ name: 'test 123' }).orderBy({ a: QueryOrder.DESC, b: 'ASC', c: 'desc', d: -1 }).limit(2, 1);
    expect(qb.getQuery()).toEqual('select `e0`.* from `publisher2` as `e0` where `e0`.`name` = ? order by `e0`.`a` desc, `e0`.`b` asc, `e0`.`c` desc, `e0`.`d` desc limit ? offset ?');
    expect(qb.getParams()).toEqual(['test 123', 2, 1]);
  });

  test('select constant expression', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2);
    qb.select('1').where({ id: 123 });
    expect(qb.getQuery()).toEqual('select 1 from `publisher2` as `e0` where `e0`.`id` = ?');
    expect(qb.getParams()).toEqual([123]);
  });

  test('select in query', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2);
    qb.select(['id', 'name', 'type']).where({ name: { $in: ['test 123', 'lol 321'] }, type: PublisherType.GLOBAL }).limit(2, 1);
    expect(qb.getQuery()).toEqual('select `e0`.`id`, `e0`.`name`, `e0`.`type` from `publisher2` as `e0` where `e0`.`name` in (?, ?) and `e0`.`type` = ? limit ? offset ?');
    expect(qb.getParams()).toEqual(['test 123', 'lol 321', PublisherType.GLOBAL, 2, 1]);
  });

  test('select andWhere/orWhere', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2);
    qb.select('*')
      .where({ name: 'test 123' })
      .andWhere({ type: PublisherType.GLOBAL })
      .orWhere({ name: 'lol 321' })
      .limit(2, 1);
    expect(qb.getQuery()).toEqual('select `e0`.* from `publisher2` as `e0` where ((`e0`.`name` = ? and `e0`.`type` = ?) or `e0`.`name` = ?) limit ? offset ?');
    expect(qb.getParams()).toEqual(['test 123', PublisherType.GLOBAL, 'lol 321', 2, 1]);
  });

  test('select andWhere/orWhere as first where condition', async () => {
    const qb1 = orm.em.createQueryBuilder(Publisher2)
      .select('*')
      .andWhere({ type: PublisherType.GLOBAL })
      .orWhere({ name: 'lol 321' })
      .limit(2, 1);
    expect(qb1.getQuery()).toEqual('select `e0`.* from `publisher2` as `e0` where (`e0`.`type` = ? or `e0`.`name` = ?) limit ? offset ?');
    expect(qb1.getParams()).toEqual([PublisherType.GLOBAL, 'lol 321', 2, 1]);

    const qb2 = orm.em.createQueryBuilder(Publisher2)
      .select('*')
      .orWhere({ name: 'lol 321' })
      .andWhere({ type: PublisherType.GLOBAL })
      .limit(2, 1);
    expect(qb2.getQuery()).toEqual('select `e0`.* from `publisher2` as `e0` where (`e0`.`name` = ? and `e0`.`type` = ?) limit ? offset ?');
    expect(qb2.getParams()).toEqual(['lol 321', PublisherType.GLOBAL, 2, 1]);
  });

  test('select multiple andWhere', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2);
    qb.select('*')
      .where({ name: 'test 123' })
      .andWhere({ type: PublisherType.GLOBAL })
      .andWhere({ name: 'test 321' })
      .andWhere({ name: 'lol 321' })
      .limit(2, 1);
    expect(qb.getQuery()).toEqual('select `e0`.* from `publisher2` as `e0` where (`e0`.`name` = ? and `e0`.`type` = ? and `e0`.`name` = ? and `e0`.`name` = ?) limit ? offset ?');
    expect(qb.getParams()).toEqual(['test 123', PublisherType.GLOBAL, 'test 321', 'lol 321', 2, 1]);
  });

  test('select multiple orWhere', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2);
    qb.select('*')
      .where({ name: 'test 123' })
      .orWhere({ type: PublisherType.GLOBAL })
      .orWhere({ name: 'test 321' })
      .orWhere({ name: 'lol 321' })
      .limit(2, 1);
    expect(qb.getQuery()).toEqual('select `e0`.* from `publisher2` as `e0` where (`e0`.`name` = ? or `e0`.`type` = ? or `e0`.`name` = ? or `e0`.`name` = ?) limit ? offset ?');
    expect(qb.getParams()).toEqual(['test 123', PublisherType.GLOBAL, 'test 321', 'lol 321', 2, 1]);
  });

  test('select leftJoin 1:1 owner', async () => {
    const qb = orm.em.createQueryBuilder(FooBar2, 'fb');
    qb.select(['fb.*', 'fz.*'])
      .leftJoin('fb.baz', 'fz')
      .where({ 'fz.name': 'test 123' })
      .limit(2, 1);
    const sql = 'select `fb`.*, `fz`.* from `foo_bar2` as `fb` ' +
      'left join `foo_baz2` as `fz` on `fb`.`baz_id` = `fz`.`id` ' +
      'where `fz`.`name` = ? ' +
      'limit ? offset ?';
    expect(qb.getQuery()).toEqual(sql);
    expect(qb.getParams()).toEqual(['test 123', 2, 1]);
  });

  test('select leftJoin 1:1 inverse', async () => {
    const qb = orm.em.createQueryBuilder(FooBaz2, 'fz');
    qb.select(['fb.*', 'fz.*'])
      .leftJoin('fz.bar', 'fb')
      .where({ 'fb.name': 'test 123' })
      .limit(2, 1);
    const sql = 'select `fb`.*, `fz`.* from `foo_baz2` as `fz` ' +
      'left join `foo_bar2` as `fb` on `fz`.`id` = `fb`.`baz_id` ' +
      'where `fb`.`name` = ? ' +
      'limit ? offset ?';
    expect(qb.getQuery()).toEqual(sql);
    expect(qb.getParams()).toEqual(['test 123', 2, 1]);
  });

  test('select leftJoin m:1', async () => {
    const qb = orm.em.createQueryBuilder(Book2, 'b');
    qb.select(['a.*', 'b.*'])
      .leftJoin('b.author', 'a')
      .where({ 'a.name': 'test 123' })
      .limit(2, 1);
    const sql = 'select `a`.*, `b`.* from `book2` as `b` ' +
      'left join `author2` as `a` on `b`.`author_id` = `a`.`id` ' +
      'where `a`.`name` = ? ' +
      'limit ? offset ?';
    expect(qb.getQuery()).toEqual(sql);
    expect(qb.getParams()).toEqual(['test 123', 2, 1]);
  });

  test('select leftJoin 1:m', async () => {
    const qb = orm.em.createQueryBuilder(Author2, 'a');
    qb.select(['a.*', 'b.*'])
      .leftJoin('a.books', 'b')
      .where({ 'b.title': 'test 123' })
      .limit(2, 1);
    const sql = 'select `a`.*, `b`.* from `author2` as `a` ' +
      'left join `book2` as `b` on `a`.`id` = `b`.`author_id` ' +
      'where `b`.`title` = ? ' +
      'limit ? offset ?';
    expect(qb.getQuery()).toEqual(sql);
    expect(qb.getParams()).toEqual(['test 123', 2, 1]);
  });

  test('select leftJoin m:n owner', async () => {
    const qb = orm.em.createQueryBuilder(Book2, 'b');
    qb.select(['b.*', 't.*'])
      .leftJoin('b.tags', 't')
      .where({ 't.name': 'test 123' })
      .limit(2, 1);
    const sql = 'select `b`.*, `t`.*, `e1`.`book2_uuid_pk`, `e1`.`book_tag2_id` from `book2` as `b` ' +
      'left join `book2_to_book_tag2` as `e1` on `b`.`uuid_pk` = `e1`.`book2_uuid_pk` ' +
      'left join `book_tag2` as `t` on `e1`.`book_tag2_id` = `t`.`id` ' +
      'where `t`.`name` = ? ' +
      'limit ? offset ?';
    expect(qb.getQuery()).toEqual(sql);
    expect(qb.getParams()).toEqual(['test 123', 2, 1]);
  });

  test('select leftJoin m:n inverse', async () => {
    const qb = orm.em.createQueryBuilder(BookTag2, 't');
    qb.select(['b.*', 't.*'])
      .leftJoin('t.books', 'b')
      .where({ 'b.title': 'test 123' })
      .limit(2, 1);
    const sql = 'select `b`.*, `t`.*, `e1`.`book_tag2_id`, `e1`.`book2_uuid_pk` from `book_tag2` as `t` ' +
      'left join `book2_to_book_tag2` as `e1` on `t`.`id` = `e1`.`book_tag2_id` ' +
      'left join `book2` as `b` on `e1`.`book2_uuid_pk` = `b`.`uuid_pk` ' +
      'where `b`.`title` = ? ' +
      'limit ? offset ?';
    expect(qb.getQuery()).toEqual(sql);
    expect(qb.getParams()).toEqual(['test 123', 2, 1]);
  });

  test('select join and leftJoin combined', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2, 'p');
    qb.select(['p.*', 'b.*', 'a.*', 't.*'])
      .leftJoin('books', 'b')
      .join('b.author', 'a')
      .join('b.tags', 't')
      .where({ 'p.name': 'test 123', 'b.title': /3$/ })
      .limit(2, 1);
    const sql = 'select `p`.*, `b`.*, `a`.*, `t`.*, `e1`.`book2_uuid_pk`, `e1`.`book_tag2_id` from `publisher2` as `p` ' +
      'left join `book2` as `b` on `p`.`id` = `b`.`publisher_id` ' +
      'inner join `author2` as `a` on `b`.`author_id` = `a`.`id` ' +
      'inner join `book2_to_book_tag2` as `e1` on `b`.`uuid_pk` = `e1`.`book2_uuid_pk` ' +
      'inner join `book_tag2` as `t` on `e1`.`book_tag2_id` = `t`.`id` ' +
      'where `p`.`name` = ? and `b`.`title` like ? ' +
      'limit ? offset ?';
    expect(qb.getQuery()).toEqual(sql);
    expect(qb.getParams()).toEqual(['test 123', '%3', 2, 1]);
  });

  test('select with boolean', async () => {
    const qb = orm.em.createQueryBuilder(Author2);
    qb.select('*').where({ termsAccepted: false });
    expect(qb.getQuery()).toEqual('select `e0`.* from `author2` as `e0` where `e0`.`terms_accepted` = ?');
    expect(qb.getParams()).toEqual([false]);
  });

  test('select with custom expression', async () => {
    const qb1 = orm.em.createQueryBuilder(Book2);
    qb1.select('*').where({ 'JSON_CONTAINS(`e0`.`meta`, ?)': [{ foo: 'bar' }] });
    expect(qb1.getQuery()).toEqual('select `e0`.* from `book2` as `e0` where JSON_CONTAINS(`e0`.`meta`, ?)');
    expect(qb1.getParams()).toEqual(['{"foo":"bar"}']);

    const qb2 = orm.em.createQueryBuilder(Book2);
    qb2.select('*').where({ 'JSON_CONTAINS(`e0`.`meta`, ?) = ?': [{ foo: 'baz' }, false] });
    expect(qb2.getQuery()).toEqual('select `e0`.* from `book2` as `e0` where JSON_CONTAINS(`e0`.`meta`, ?) = ?');
    expect(qb2.getParams()).toEqual(['{"foo":"baz"}', false]);
  });

  test('select by regexp', async () => {
    let qb = orm.em.createQueryBuilder(Publisher2);
    qb.select('*').where({ name: /test/ });
    expect(qb.getQuery()).toEqual('select `e0`.* from `publisher2` as `e0` where `e0`.`name` like ?');
    expect(qb.getParams()).toEqual(['%test%']);

    qb = orm.em.createQueryBuilder(Publisher2);
    qb.select('*').where({ name: /^test/ });
    expect(qb.getQuery()).toEqual('select `e0`.* from `publisher2` as `e0` where `e0`.`name` like ?');
    expect(qb.getParams()).toEqual(['test%']);

    qb = orm.em.createQueryBuilder(Publisher2);
    qb.select('*').where({ name: /t.st$/ });
    expect(qb.getQuery()).toEqual('select `e0`.* from `publisher2` as `e0` where `e0`.`name` like ?');
    expect(qb.getParams()).toEqual(['%t_st']);

    qb = orm.em.createQueryBuilder(Publisher2);
    qb.select('*').where({ name: /^c.o.*l-te.*st\.c.m$/ });
    expect(qb.getQuery()).toEqual('select `e0`.* from `publisher2` as `e0` where `e0`.`name` like ?');
    expect(qb.getParams()).toEqual(['c_o%l-te%st.c_m']);
  });

  test('select by m:1', async () => {
    const qb = orm.em.createQueryBuilder(Author2);
    qb.select('*').where({ favouriteBook: 123 });
    expect(qb.getQuery()).toEqual('select `e0`.* from `author2` as `e0` where `e0`.`favourite_book_uuid_pk` = ?');
    expect(qb.getParams()).toEqual([123]);
  });

  test('select by 1:m', async () => {
    const qb = orm.em.createQueryBuilder(Author2);
    qb.select('*').where({ books: { $in: [123, 321] } });
    expect(qb.getQuery()).toEqual('select `e0`.* from `author2` as `e0` left join `book2` as `e1` on `e0`.`id` = `e1`.`author_id` where `e1`.`id` in (?, ?)');
    expect(qb.getParams()).toEqual([123, 321]);
  });

  test('select by 1:1', async () => {
    const qb = orm.em.createQueryBuilder(FooBar2);
    qb.select('*').where({ baz: 123 });
    expect(qb.getQuery()).toEqual('select `e0`.* from `foo_bar2` as `e0` where `e0`.`baz_id` = ?');
    expect(qb.getParams()).toEqual([123]);
  });

  test('select by 1:1 inversed', async () => {
    const qb = orm.em.createQueryBuilder(FooBaz2);
    qb.select('*').where({ bar: 123 });
    expect(qb.getQuery()).toEqual('select `e0`.*, `e1`.`id` as `bar_id` from `foo_baz2` as `e0` left join `foo_bar2` as `e1` on `e0`.`id` = `e1`.`baz_id` where `e1`.`id` = ?');
    expect(qb.getParams()).toEqual([123]);
  });

  test('select by 1:1 inversed with populate', async () => {
    const qb = orm.em.createQueryBuilder(FooBaz2);
    qb.select('*').where({ id: 123 }).populate(['bar']);
    expect(qb.getQuery()).toEqual('select `e0`.*, `e1`.`id` as `bar_id` from `foo_baz2` as `e0` left join `foo_bar2` as `e1` on `e0`.`id` = `e1`.`baz_id` where `e0`.`id` = ?');
    expect(qb.getParams()).toEqual([123]);
  });

  test('select by 1:1 inversed (uuid pk)', async () => {
    const qb = orm.em.createQueryBuilder(Book2);
    qb.select('*').where({ test: 123 });
    expect(qb.getQuery()).toEqual('select `e0`.*, `e1`.`id` as `test_id` from `book2` as `e0` left join `test2` as `e1` on `e0`.`uuid_pk` = `e1`.`book_uuid_pk` where `e1`.`id` = ?');
    expect(qb.getParams()).toEqual([123]);
  });

  test('select by 1:1 inversed with populate (uuid pk)', async () => {
    const qb = orm.em.createQueryBuilder(Book2);
    qb.select('*').where({ test: 123 }).populate(['test']);
    expect(qb.getQuery()).toEqual('select `e0`.*, `e1`.`id` as `test_id` from `book2` as `e0` left join `test2` as `e1` on `e0`.`uuid_pk` = `e1`.`book_uuid_pk` where `e1`.`id` = ?');
    expect(qb.getParams()).toEqual([123]);
  });

  test('select by 1:1 inversed with populate() before where() (uuid pk)', async () => {
    const qb = orm.em.createQueryBuilder(Book2);
    qb.select('*').populate(['test']).where({ test: 123 });
    expect(qb.getQuery()).toEqual('select `e0`.*, `e1`.`id` as `test_id` from `book2` as `e0` left join `test2` as `e1` on `e0`.`uuid_pk` = `e1`.`book_uuid_pk` where `e1`.`id` = ?');
    expect(qb.getParams()).toEqual([123]);
  });

  test('select by m:n', async () => {
    const qb = orm.em.createQueryBuilder(Book2);
    qb.select('*').where({ tags: 123 });
    expect(qb.getQuery()).toEqual('select `e0`.*, `e1`.`book2_uuid_pk`, `e1`.`book_tag2_id` from `book2` as `e0` left join `book2_to_book_tag2` as `e1` on `e0`.`uuid_pk` = `e1`.`book2_uuid_pk` where `e1`.`book_tag2_id` = ?');
    expect(qb.getParams()).toEqual([123]);
  });

  test('select by m:n inversed', async () => {
    const qb = orm.em.createQueryBuilder(BookTag2);
    qb.select('*').where({ books: 123 });
    expect(qb.getQuery()).toEqual('select `e0`.*, `e1`.`book_tag2_id`, `e1`.`book2_uuid_pk` from `book_tag2` as `e0` left join `book2_to_book_tag2` as `e1` on `e0`.`id` = `e1`.`book_tag2_id` where `e1`.`book2_uuid_pk` = ?');
    expect(qb.getParams()).toEqual([123]);
  });

  test('select by m:n with populate', async () => {
    const qb = orm.em.createQueryBuilder(Test2);
    qb.select('*').populate(['publisher2_to_test2']).where({ publisher2_id: { $in: [ 1, 2 ] } }).orderBy({ 'publisher2_to_test2.id': QueryOrder.ASC });
    let sql = 'select `e0`.*, `e1`.`test2_id`, `e1`.`publisher2_id` from `test2` as `e0`';
    sql += ' left join `publisher2_to_test2` as `e1` on `e0`.`id` = `e1`.`test2_id`';
    sql += ' where `e1`.`publisher2_id` in (?, ?)';
    sql += ' order by `e1`.`id` asc';
    expect(qb.getQuery()).toEqual(sql);
    expect(qb.getParams()).toEqual([1, 2]);
  });

  test('select by m:n with unknown populate ignored', async () => {
    const qb = orm.em.createQueryBuilder(Test2);
    qb.select('*').populate(['not_existing']);
    expect(qb.getQuery()).toEqual('select `e0`.* from `test2` as `e0`');
    expect(qb.getParams()).toEqual([]);
  });

  test('select with operator (simple)', async () => {
    const qb = orm.em.createQueryBuilder(Test2);
    qb.select('*').where({ id: { $nin: [3, 4] } });
    expect(qb.getQuery()).toEqual('select `e0`.* from `test2` as `e0` where `e0`.`id` not in (?, ?)');
    expect(qb.getParams()).toEqual([3, 4]);
  });

  test('select with operator (wrapped)', async () => {
    const qb1 = orm.em.createQueryBuilder(Test2);
    qb1.select('*').where({ $and: [{ id: { $nin: [3, 4] } }, { id: { $gt: 2 } }] });
    expect(qb1.getQuery()).toEqual('select `e0`.* from `test2` as `e0` where (`e0`.`id` not in (?, ?) and `e0`.`id` > ?)');
    expect(qb1.getParams()).toEqual([3, 4, 2]);

    const qb2 = orm.em.createQueryBuilder(Test2);
    qb2.select('*').where({ id: { $nin: [3, 4], $gt: 2 } });
    expect(qb2.getQuery()).toEqual(qb1.getQuery());
    expect(qb2.getParams()).toEqual(qb1.getParams());
  });

  test('select with operator (not)', async () => {
    const qb = orm.em.createQueryBuilder(Test2);
    qb.select('*').where({ $not: { id: { $in: [3, 4] } } });
    expect(qb.getQuery()).toEqual('select `e0`.* from `test2` as `e0` where not (`e0`.`id` in (?, ?))');
    expect(qb.getParams()).toEqual([3, 4]);
  });

  test('select with unsupported operator', async () => {
    const qb = orm.em.createQueryBuilder(Test2);
    qb.select('*').where({ $test: { foo: 'bar'} });
    expect(qb.getQuery()).toEqual('select `e0`.* from `test2` as `e0`');
    expect(qb.getParams()).toEqual([]);
  });

  test('select distinct id with left join', async () => {
    const qb = orm.em.createQueryBuilder(BookTag2, 't');
    qb.select(['distinct b.uuid_pk', 'b.*', 't.*'])
      .leftJoin('t.books', 'b')
      .where({ 'b.title': 'test 123' })
      .limit(2, 1);
    const sql = 'select distinct b.uuid_pk, `b`.*, `t`.*, `e1`.`book_tag2_id`, `e1`.`book2_uuid_pk` from `book_tag2` as `t` ' +
      'left join `book2_to_book_tag2` as `e1` on `t`.`id` = `e1`.`book_tag2_id` ' +
      'left join `book2` as `b` on `e1`.`book2_uuid_pk` = `b`.`uuid_pk` ' +
      'where `b`.`title` = ? ' +
      'limit ? offset ?';
    expect(qb.getQuery()).toEqual(sql);
    expect(qb.getParams()).toEqual(['test 123', 2, 1]);
  });

  test('select distinct via flag', async () => {
    const qb = orm.em.createQueryBuilder(BookTag2, 't');
    qb.select(['b.uuid', 'b.*', 't.*'], true)
      .leftJoin('t.books', 'b')
      .where({ 'b.title': 'test 123' })
      .limit(2, 1);
    const sql = 'select distinct `b`.`uuid_pk`, `b`.*, `t`.*, `e1`.`book_tag2_id`, `e1`.`book2_uuid_pk` from `book_tag2` as `t` ' +
      'left join `book2_to_book_tag2` as `e1` on `t`.`id` = `e1`.`book_tag2_id` ' +
      'left join `book2` as `b` on `e1`.`book2_uuid_pk` = `b`.`uuid_pk` ' +
      'where `b`.`title` = ? ' +
      'limit ? offset ?';
    expect(qb.getQuery()).toEqual(sql);
    expect(qb.getParams()).toEqual(['test 123', 2, 1]);
  });

  test('select where string literal', async () => {
    const qb = orm.em.createQueryBuilder(BookTag2, 't');
    qb.select(['b.*', 't.*'])
      .leftJoin('t.books', 'b')
      .where('b.title = ? or b.title = ?', ['test 123', 'lol 321'])
      .andWhere('1 = 1')
      .orWhere('1 = 2')
      .limit(2, 1);
    const sql = 'select `b`.*, `t`.*, `e1`.`book_tag2_id`, `e1`.`book2_uuid_pk` from `book_tag2` as `t` ' +
      'left join `book2_to_book_tag2` as `e1` on `t`.`id` = `e1`.`book_tag2_id` ' +
      'left join `book2` as `b` on `e1`.`book2_uuid_pk` = `b`.`uuid_pk` ' +
      'where (((b.title = ? or b.title = ?) and (1 = 1)) or (1 = 2)) ' +
      'limit ? offset ?';
    expect(qb.getQuery()).toEqual(sql);
    expect(qb.getParams()).toEqual(['test 123', 'lol 321', 2, 1]);
  });

  test('select with group by and having', async () => {
    const qb = orm.em.createQueryBuilder(BookTag2, 't');
    qb.select(['b.*', 't.*', 'count(t.id) as tags'])
      .leftJoin('t.books', 'b')
      .where('b.title = ? or b.title = ?', ['test 123', 'lol 321'])
      .groupBy('b.uuid')
      .having('tags > ?', [0])
      .limit(2, 1);
    const sql = 'select `b`.*, `t`.*, count(t.id) as tags, `e1`.`book_tag2_id`, `e1`.`book2_uuid_pk` from `book_tag2` as `t` ' +
      'left join `book2_to_book_tag2` as `e1` on `t`.`id` = `e1`.`book_tag2_id` ' +
      'left join `book2` as `b` on `e1`.`book2_uuid_pk` = `b`.`uuid_pk` ' +
      'where (b.title = ? or b.title = ?) ' +
      'group by `b`.`uuid_pk` ' +
      'having (tags > ?) ' +
      'limit ? offset ?';
    expect(qb.getQuery()).toEqual(sql);
    expect(qb.getParams()).toEqual(['test 123', 'lol 321', 0, 2, 1]);
  });

  test('select with group by and having with object', async () => {
    const qb = orm.em.createQueryBuilder(BookTag2, 't');
    qb.select(['b.*', 't.*', 'count(t.id) as tags'])
      .leftJoin('t.books', 'b')
      .where('b.title = ? or b.title = ?', ['test 123', 'lol 321'])
      .groupBy('b.uuid')
      .having({ $or: [{ 'b.uuid': '...', 'count(t.id)': { $gt: 0 } }, { 'b.title': 'my title' }] })
      .limit(2, 1);
    const sql = 'select `b`.*, `t`.*, count(t.id) as tags, `e1`.`book_tag2_id`, `e1`.`book2_uuid_pk` from `book_tag2` as `t` ' +
      'left join `book2_to_book_tag2` as `e1` on `t`.`id` = `e1`.`book_tag2_id` ' +
      'left join `book2` as `b` on `e1`.`book2_uuid_pk` = `b`.`uuid_pk` ' +
      'where (b.title = ? or b.title = ?) ' +
      'group by `b`.`uuid_pk` ' +
      'having ((`b`.`uuid_pk` = ? and count(t.id) > ?) or `b`.`title` = ?) ' +
      'limit ? offset ?';
    expect(qb.getQuery()).toEqual(sql);
    expect(qb.getParams()).toEqual(['test 123', 'lol 321', '...', 0, 'my title', 2, 1]);
  });

  test('select with operator (and)', async () => {
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
    expect(qb.getQuery()).toEqual('select `e0`.* from `test2` as `e0` ' +
      'where (`e0`.`id` in (?, ?, ?) ' +
      'and `e0`.`id` not in (?, ?) ' +
      'and `e0`.`id` > ? ' +
      'and `e0`.`id` < ? ' +
      'and `e0`.`id` >= ? ' +
      'and `e0`.`id` <= ? ' +
      'and `e0`.`id` != ? ' +
      'and not (`e0`.`id` = ?))');
    expect(qb.getParams()).toEqual([1, 2, 7, 3, 4, 5, 10, 7, 8, 9, 10]);
  });

  test('select with operator (or)', async () => {
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
    expect(qb.getQuery()).toEqual('select `e0`.* from `test2` as `e0` ' +
      'where (`e0`.`id` in (?, ?, ?) ' +
      'or `e0`.`id` not in (?, ?) ' +
      'or `e0`.`id` > ? ' +
      'or `e0`.`id` < ? ' +
      'or `e0`.`id` >= ? ' +
      'or `e0`.`id` <= ? ' +
      'or `e0`.`id` != ? ' +
      'or not (`e0`.`id` = ?))');
    expect(qb.getParams()).toEqual([1, 2, 7, 3, 4, 5, 10, 7, 8, 9, 10]);
  });

  test('select with smart query conditions', async () => {
    const qb = orm.em.createQueryBuilder(Test2);
    qb.select('*').where({
      'key1:gt': 1,
      'key2:lt': 2,
      'key3:gte': 3,
      'key4:lte': 4,
      'key5:ne': 5,
      'key6:in': [6, 7],
      'key7:nin': [8, 9],
    });
    expect(qb.getQuery()).toEqual('select `e0`.* from `test2` as `e0` ' +
      'where `e0`.`key1` > ? ' +
      'and `e0`.`key2` < ? ' +
      'and `e0`.`key3` >= ? ' +
      'and `e0`.`key4` <= ? ' +
      'and `e0`.`key5` != ? ' +
      'and `e0`.`key6` in (?, ?) ' +
      'and `e0`.`key7` not in (?, ?)');
    expect(qb.getParams()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('select count query', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2);
    qb.count().where({ name: 'test 123', type: PublisherType.GLOBAL });
    expect(qb.getQuery()).toEqual('select count(`e0`.`id`) as `count` from `publisher2` as `e0` where `e0`.`name` = ? and `e0`.`type` = ?');
    expect(qb.getParams()).toEqual(['test 123', PublisherType.GLOBAL]);
  });

  test('select count distinct query', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2);
    qb.count('id', true).where({ name: 'test 123', type: PublisherType.GLOBAL });
    expect(qb.getQuery()).toEqual('select count(distinct `e0`.`id`) as `count` from `publisher2` as `e0` where `e0`.`name` = ? and `e0`.`type` = ?');
    expect(qb.getParams()).toEqual(['test 123', PublisherType.GLOBAL]);
  });

  test('select count with non-standard PK field name (uuid_pk)', async () => {
    const qb = orm.em.createQueryBuilder(Book2);
    qb.count().where({ title: 'test 123' });
    expect(qb.getQuery()).toEqual('select count(`e0`.`uuid_pk`) as `count` from `book2` as `e0` where `e0`.`title` = ?');
    expect(qb.getParams()).toEqual(['test 123']);
  });

  test('select with locking', async () => {
    const qb1 = orm.em.createQueryBuilder(Test2);
    qb1.select('*').where({ title: 'test 123' }).setLockMode(LockMode.OPTIMISTIC);
    expect(qb1.getQuery()).toEqual('select `e0`.* from `test2` as `e0` where `e0`.`title` = ?');

    await orm.em.transactional(async em => {
      const qb2 = em.createQueryBuilder(Book2);
      qb2.select('*').where({ title: 'test 123' }).setLockMode(LockMode.NONE);
      expect(qb2.getQuery()).toEqual('select `e0`.* from `book2` as `e0` where `e0`.`title` = ?');

      const qb3 = em.createQueryBuilder(Book2);
      qb3.select('*').where({ title: 'test 123' }).setLockMode(LockMode.PESSIMISTIC_READ);
      expect(qb3.getQuery()).toEqual('select `e0`.* from `book2` as `e0` where `e0`.`title` = ? lock in share mode');

      const qb4 = em.createQueryBuilder(Book2);
      qb4.select('*').where({ title: 'test 123' }).setLockMode(LockMode.PESSIMISTIC_WRITE);
      expect(qb4.getQuery()).toEqual('select `e0`.* from `book2` as `e0` where `e0`.`title` = ? for update');
    });
  });

  test('pessimistic locking requires active transaction', async () => {
    const qb = orm.em.createQueryBuilder(Author2);
    qb.select('*').where({ name: '...' });
    expect(() => qb.setLockMode(LockMode.NONE)).toThrowError('An open transaction is required for this operation');
    expect(() => qb.setLockMode(LockMode.PESSIMISTIC_READ)).toThrowError('An open transaction is required for this operation');
    expect(() => qb.setLockMode(LockMode.PESSIMISTIC_WRITE)).toThrowError('An open transaction is required for this operation');
    expect(() => qb.setLockMode(LockMode.OPTIMISTIC).getQuery()).toThrowError('The optimistic lock on entity Author2 failed');
  });

  test('insert query', async () => {
    const qb1 = orm.em.createQueryBuilder(Publisher2);
    qb1.insert({ name: 'test 123', type: PublisherType.GLOBAL });
    expect(qb1.getQuery()).toEqual('insert into `publisher2` (`name`, `type`) values (?, ?)');
    expect(qb1.getParams()).toEqual(['test 123', PublisherType.GLOBAL]);

    const qb2 = orm.em.createQueryBuilder(Author2);
    qb2.insert({ name: 'test 123', favouriteBook: 2359, termsAccepted: true });
    expect(qb2.getQuery()).toEqual('insert into `author2` (`favourite_book_uuid_pk`, `name`, `terms_accepted`) values (?, ?, ?)');
    expect(qb2.getParams()).toEqual([2359, 'test 123', true]);

    const qb3 = orm.em.createQueryBuilder(BookTag2);
    qb3.insert({ books: 123 });
    expect(qb3.getQuery()).toEqual('insert into `book_tag2` (`books`) values (?)');
    expect(qb3.getParams()).toEqual([123]);
  });

  test('update query', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2);
    qb.update({ name: 'test 123', type: PublisherType.GLOBAL }).where({ id: 123, type: PublisherType.LOCAL });
    expect(qb.getQuery()).toEqual('update `publisher2` set `name` = ?, `type` = ? where `id` = ? and `type` = ?');
    expect(qb.getParams()).toEqual(['test 123', PublisherType.GLOBAL, 123, PublisherType.LOCAL]);
  });

  test('update query with entity in data', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2);
    const test = Test2.create('test');
    test.id = 321;
    qb.update({ name: 'test 123', test }).where({ id: 123, type: PublisherType.LOCAL });
    expect(qb.getQuery()).toEqual('update `publisher2` set `name` = ?, `test` = ? where `id` = ? and `type` = ?');
    expect(qb.getParams()).toEqual(['test 123', 321, 123, PublisherType.LOCAL]);
  });

  test('delete query', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2);
    qb.delete({ name: 'test 123', type: PublisherType.GLOBAL });
    expect(qb.getQuery()).toEqual('delete from `publisher2` where `name` = ? and `type` = ?');
    expect(qb.getParams()).toEqual(['test 123', PublisherType.GLOBAL]);
  });

  test('clone QB', async () => {
    const qb = orm.em.createQueryBuilder(Publisher2, 'p')
      .select(['p.*', 'b.*', 'a.*', 't.*'])
      .leftJoin('books', 'b')
      .join('b.author', 'a')
      .join('b.tags', 't')
      .where({ 'p.name': 'test 123', 'b.title': /3$/ })
      .orderBy({ 'b.title': QueryOrder.DESC })
      .limit(2, 1);

    const clone = qb.clone();
    expect(clone.type).toBe(qb.type);
    expect(clone['aliasCounter']).toBe(qb['aliasCounter']);
    expect(clone['flags']).not.toBe(qb['flags']);
    expect(clone['finalized']).toBe(qb['finalized']);
    expect(clone['_fields']).not.toBe(qb['_fields']);
    expect(clone['_populate']).not.toBe(qb['_populate']);
    expect(clone['_populateMap']).not.toBe(qb['_populateMap']);
    expect(clone['_joins']).not.toBe(qb['_joins']);
    expect(clone['_aliasMap']).not.toBe(qb['_aliasMap']);
    expect(clone['_cond']).not.toBe(qb['_cond']);
    expect(clone['_orderBy']).not.toBe(qb['_orderBy']);
    expect(clone['_limit']).toBe(qb['_limit']);
    expect(clone['_offset']).toBe(qb['_offset']);

    clone.orWhere({ 'p.name': 'or this name' }).orderBy({ 'p.name': QueryOrder.ASC }).limit(10, 5);

    const sql = 'select `p`.*, `b`.*, `a`.*, `t`.*, `e1`.`book2_uuid_pk`, `e1`.`book_tag2_id` from `publisher2` as `p` ' +
      'left join `book2` as `b` on `p`.`id` = `b`.`publisher_id` ' +
      'inner join `author2` as `a` on `b`.`author_id` = `a`.`id` ' +
      'inner join `book2_to_book_tag2` as `e1` on `b`.`uuid_pk` = `e1`.`book2_uuid_pk` ' +
      'inner join `book_tag2` as `t` on `e1`.`book_tag2_id` = `t`.`id` ' +
      'where `p`.`name` = ? and `b`.`title` like ? ' +
      'order by `b`.`title` desc ' +
      'limit ? offset ?';
    expect(qb.getQuery()).toEqual(sql);
    expect(qb.getParams()).toEqual(['test 123', '%3', 2, 1]);

    const sql2 = 'select `p`.*, `b`.*, `a`.*, `t`.*, `e1`.`book2_uuid_pk`, `e1`.`book_tag2_id` from `publisher2` as `p` ' +
      'left join `book2` as `b` on `p`.`id` = `b`.`publisher_id` ' +
      'inner join `author2` as `a` on `b`.`author_id` = `a`.`id` ' +
      'inner join `book2_to_book_tag2` as `e1` on `b`.`uuid_pk` = `e1`.`book2_uuid_pk` ' +
      'inner join `book_tag2` as `t` on `e1`.`book_tag2_id` = `t`.`id` ' +
      'where ((`p`.`name` = ? and `b`.`title` like ?) or `p`.`name` = ?) ' +
      'order by `p`.`name` asc ' +
      'limit ? offset ?';
    expect(clone.getQuery()).toEqual(sql2);
    expect(clone.getParams()).toEqual(['test 123', '%3', 'or this name', 10, 5]);
  });

  afterAll(async () => orm.close(true));

});
