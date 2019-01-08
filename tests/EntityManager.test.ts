import { ObjectID } from 'bson';
import { Collection, EntityManager, MikroORM } from '../lib';
import { Author, Publisher, PublisherType, Book, BookTag, Test } from './entities';
import { AuthorRepository } from './repositories/AuthorRepository';
import { initORM, wipeDatabase } from './bootstrap';

/**
 * @class EntityManagerTest
 */
describe('EntityManager', () => {

  let orm: MikroORM;

  beforeAll(async () => orm = await initORM());
  beforeEach(async () => wipeDatabase(orm.em));

  test('should load entities', async () => {
    expect(orm).toBeInstanceOf(MikroORM);
    expect(orm.em).toBeInstanceOf(EntityManager);

    const god = new Author('God', 'hello@heaven.god');
    const bible = new Book('Bible', god);
    await orm.em.persist(bible);

    const author = new Author('Jon Snow', 'snow@wall.st');
    author.born = new Date();
    author.favouriteBook = bible;

    const publisher = new Publisher('7K publisher', PublisherType.GLOBAL);

    const book1 = new Book('My Life on The Wall, part 1', author);
    book1.publisher = publisher;
    book1.metaObject = {};
    book1.metaArray = [{test: 123, lol: true}];
    book1.metaArrayOfStrings = ['test'];
    const book2 = new Book('My Life on The Wall, part 2', author);
    book2.publisher = publisher;
    const book3 = new Book('My Life on The Wall, part 3', author);
    book3.publisher = publisher;

    const repo = orm.em.getRepository<Book>(Book.name);
    await repo.persist(book1, false);
    await repo.persist(book2, false);
    await repo.persist(book3, false);
    await repo.flush();
    orm.em.clear();

    const publisher7k = await orm.em.getRepository<Publisher>(Publisher.name).findOne({ name: '7K publisher' });
    expect(publisher7k).not.toBeNull();
    expect(publisher7k.tests).toBeInstanceOf(Collection);
    expect(publisher7k.tests.isInitialized()).toBe(true);
    orm.em.clear();

    const authorRepository = orm.em.getRepository<Author>(Author.name);
    const booksRepository = orm.em.getRepository<Book>(Book.name);
    const books = await booksRepository.findAll(['author']);
    expect(books[0].author.isInitialized()).toBe(true);
    expect(await authorRepository.findOne({ favouriteBook: bible._id })).not.toBe(null);
    orm.em.clear();

    const noBooks = await booksRepository.find({ title: 'not existing' }, ['author']);
    expect(noBooks.length).toBe(0);
    orm.em.clear();

    const jon = await authorRepository.findOne({ name: 'Jon Snow' }, ['books', 'favouriteBook']);
    const authors = await authorRepository.findAll(['books', 'favouriteBook']);
    expect(await authorRepository.findOne({ email: 'not existing' })).toBeNull();

    // count test
    const count = await authorRepository.count();
    expect(count).toBe(authors.length);

    // identity map test
    authors.shift(); // shift the god away, as that entity is detached from IM
    expect(jon).toBe(authors[0]);
    expect(jon).toBe(await authorRepository.findOne(jon.id));
    expect(jon).toBe(await authorRepository.findOne(jon._id));

    // serialization test
    const o = jon.toObject();
    expect(o).toMatchObject({
      id: jon.id,
      books: [
        { author: jon.id, publisher: publisher.id, title: 'My Life on The Wall, part 1' },
        { author: jon.id, publisher: publisher.id, title: 'My Life on The Wall, part 2' },
        { author: jon.id, publisher: publisher.id, title: 'My Life on The Wall, part 3' },
      ],
      favouriteBook: { author: god.id, title: 'Bible' },
      born: jon.born,
      email: 'snow@wall.st',
      name: 'Jon Snow',
    });
    expect(jon.toJSON()).toEqual(o);
    expect(jon.books.getIdentifiers()).toBeInstanceOf(Array);
    expect(jon.books.getIdentifiers()[0]).toBeInstanceOf(ObjectID);
    expect(jon.books.getIdentifiers('id')).toBeInstanceOf(Array);
    expect(typeof jon.books.getIdentifiers('id')[0]).toBe('string');

    for (const author of authors) {
      expect(author.books).toBeInstanceOf(Collection);
      expect(author.books.isInitialized()).toBe(true);

      // iterator test
      for (const book of author.books) {
        expect(book.title).toMatch(/My Life on The Wall, part \d/);

        expect(book.author).toBeInstanceOf(Author);
        expect(book.author.isInitialized()).toBe(true);
        expect(book.publisher).toBeInstanceOf(Publisher);
        expect(book.publisher.isInitialized()).toBe(false);
      }
    }

    const booksByTitleAsc = await booksRepository.find({ author: jon._id }, [], { title: 1 });
    expect(booksByTitleAsc[0].title).toBe('My Life on The Wall, part 1');
    expect(booksByTitleAsc[1].title).toBe('My Life on The Wall, part 2');
    expect(booksByTitleAsc[2].title).toBe('My Life on The Wall, part 3');

    const booksByTitleDesc = await booksRepository.find({ author: jon.id }, [], { title: -1 });
    expect(booksByTitleDesc[0].title).toBe('My Life on The Wall, part 3');
    expect(booksByTitleDesc[1].title).toBe('My Life on The Wall, part 2');
    expect(booksByTitleDesc[2].title).toBe('My Life on The Wall, part 1');

    const twoBooks = await booksRepository.find({ author: jon._id }, [], { title: -1 }, 2);
    expect(twoBooks.length).toBe(2);
    expect(twoBooks[0].title).toBe('My Life on The Wall, part 3');
    expect(twoBooks[1].title).toBe('My Life on The Wall, part 2');

    const lastBook = await booksRepository.find({ author: jon.id }, ['author'], { title: -1 }, 2, 2);
    expect(lastBook.length).toBe(1);
    expect(lastBook[0].title).toBe('My Life on The Wall, part 1');
    expect(lastBook[0].author).toBeInstanceOf(Author);
    expect(lastBook[0].author.isInitialized()).toBe(true);
    await orm.em.getRepository<Book>(Book.name).remove(lastBook[0]._id);
  });

  test('should provide custom repository', async () => {
    const repo = orm.em.getRepository<Author>(Author.name) as AuthorRepository;
    expect(repo).toBeInstanceOf(AuthorRepository);
    expect(repo.magic).toBeInstanceOf(Function);
    expect(repo.magic('test')).toBe('111 test 222');
  });

  test('should throw when trying to merge entity without id', async () => {
    const author = new Author('test', 'test');
    expect(() => orm.em.merge(Author.name, author)).toThrowError('You cannot merge entity without id!');
  });

  test('fork', async () => {
    const god = new Author('God', 'hello@heaven.god');
    const bible = new Book('Bible', god);
    await orm.em.persist(bible);
    const fork = orm.em.fork();

    expect(fork).not.toBe(orm.em);
    expect(fork.getIdentityMap()).not.toBe(orm.em.getIdentityMap());
    expect(fork.entityFactory).not.toBe(orm.em.entityFactory);
    expect(fork['metadata']).toBe(orm.em['metadata']);
    expect(fork.getIdentityMap()).toEqual({});
  });

  test('findOne with empty where will throw', async () => {
    await expect(orm.em.findOne<Author>(Author.name, '')).rejects.toThrowError(`You cannot call 'EntityManager.findOne()' with empty 'where' parameter`);
    await expect(orm.em.findOne<Author>(Author.name, {})).rejects.toThrowError(`You cannot call 'EntityManager.findOne()' with empty 'where' parameter`);
    await expect(orm.em.findOne<Author>(Author.name, [])).rejects.toThrowError(`You cannot call 'EntityManager.findOne()' with empty 'where' parameter`);
    await expect(orm.em.findOne<Author>(Author.name, undefined)).rejects.toThrowError(`You cannot call 'EntityManager.findOne()' with empty 'where' parameter`);
    await expect(orm.em.findOne<Author>(Author.name, null)).rejects.toThrowError(`You cannot call 'EntityManager.findOne()' with empty 'where' parameter`);
  });

  test('findOne should initialize entity that is already in IM', async () => {
    const god = new Author('God', 'hello@heaven.god');
    const bible = new Book('Bible', god);
    await orm.em.persist(bible);
    orm.em.clear();

    const ref = orm.em.getReference(Author.name, god.id);
    expect(ref.isInitialized()).toBe(false);
    const newGod = await orm.em.findOne(Author.name, god.id);
    expect(ref).toBe(newGod);
    expect(ref.isInitialized()).toBe(true);
  });

  test('stable results of serialization', async () => {
    const god = new Author('God', 'hello@heaven.god');
    const bible = new Book('Bible', god);
    const bible2 = new Book('Bible pt. 2', god);
    const bible3 = new Book('Bible pt. 3', new Author('Lol', 'lol@lol.lol'));
    await orm.em.persist([bible, bible2, bible3]);
    orm.em.clear();

    const newGod = await orm.em.findOne(Author.name, god.id);
    const books = await orm.em.find(Book.name, {});
    await newGod.init(false);

    for (const book of books) {
      expect(book.toObject()).toMatchObject({
        author: book.author.id,
      });
    }
  });

  test('stable results of serialization (collection)', async () => {
    const pub = new Publisher('Publisher');
    await orm.em.persist(pub);
    const god = new Author('God', 'hello@heaven.god');
    const bible = new Book('Bible', god);
    bible.publisher = pub;
    const bible2 = new Book('Bible pt. 2', god);
    bible2.publisher = pub;
    const bible3 = new Book('Bible pt. 3', new Author('Lol', 'lol@lol.lol'));
    bible3.publisher = pub;
    await orm.em.persist([bible, bible2, bible3]);
    orm.em.clear();

    const newGod = await orm.em.getReference(Author.name, god.id);
    const publisher = await orm.em.findOne(Publisher.name, pub.id, ['books']);
    await newGod.init();

    const json = publisher.toObject().books;

    for (const book of publisher.books) {
      expect(json.find((b: Book) => b.id === book.id)).toMatchObject({
        author: book.author.id,
      });
    }
  });

  test('should return mongo collection', async () => {
    expect(orm.em.getCollection(Author.name).collectionName).toBe('author');
    expect(orm.em.getCollection(Book.name).collectionName).toBe('books-table');
  });

  test('findOne by id', async () => {
    const authorRepository = orm.em.getRepository<Author>(Author.name);
    const jon = new Author('Jon Snow', 'snow@wall.st');
    await authorRepository.persist(jon);

    orm.em.clear();
    let author = await authorRepository.findOne(jon._id);
    expect(author).not.toBeNull();
    expect(author.name).toBe('Jon Snow');

    orm.em.clear();
    author = await authorRepository.findOne(jon.id);
    expect(author).not.toBeNull();
    expect(author.name).toBe('Jon Snow');

    orm.em.clear();
    author = await authorRepository.findOne({ id: jon.id });
    expect(author).not.toBeNull();
    expect(author.name).toBe('Jon Snow');

    orm.em.clear();
    author = await authorRepository.findOne({ _id: jon._id });
    expect(author).not.toBeNull();
    expect(author.name).toBe('Jon Snow');
  });

  test('populate ManyToOne relation', async () => {
    const authorRepository = orm.em.getRepository<Author>(Author.name);
    const god = new Author('God', 'hello@heaven.god');
    const bible = new Book('Bible', god);
    await orm.em.persist(bible);

    let jon = new Author('Jon Snow', 'snow@wall.st');
    jon.born = new Date();
    jon.favouriteBook = bible;
    await orm.em.persist(jon);
    orm.em.clear();

    jon = await authorRepository.findOne(jon.id);
    expect(jon).not.toBeNull();
    expect(jon.name).toBe('Jon Snow');
    expect(jon.favouriteBook).toBeInstanceOf(Book);
    expect(jon.favouriteBook.isInitialized()).toBe(false);

    await jon.favouriteBook.init();
    expect(jon.favouriteBook).toBeInstanceOf(Book);
    expect(jon.favouriteBook.isInitialized()).toBe(true);
    expect(jon.favouriteBook.title).toBe('Bible');
  });

  test('many to many relation', async () => {
    const author = new Author('Jon Snow', 'snow@wall.st');
    const book1 = new Book('My Life on The Wall, part 1', author);
    const book2 = new Book('My Life on The Wall, part 2', author);
    const book3 = new Book('My Life on The Wall, part 3', author);
    const tag1 = new BookTag('silly');
    const tag2 = new BookTag('funny');
    const tag3 = new BookTag('sick');
    const tag4 = new BookTag('strange');
    const tag5 = new BookTag('sexy');
    book1.tags.add(tag1, tag3);
    book2.tags.add(tag1, tag2, tag5);
    book3.tags.add(tag2, tag4, tag5);

    await orm.em.persist(book1, false);
    await orm.em.persist(book2, false);
    await orm.em.persist(book3);

    expect(tag1._id).toBeDefined();
    expect(tag2._id).toBeDefined();
    expect(tag3._id).toBeDefined();
    expect(tag4._id).toBeDefined();
    expect(tag5._id).toBeDefined();

    // test inverse side
    const tagRepository = orm.em.getRepository<BookTag>(BookTag.name);
    let tags = await tagRepository.findAll();
    expect(tags).toBeInstanceOf(Array);
    expect(tags.length).toBe(5);
    expect(tags[0]).toBeInstanceOf(BookTag);
    expect(tags[0].name).toBe('silly');
    expect(tags[0].books).toBeInstanceOf(Collection);
    expect(tags[0].books.isInitialized()).toBe(true);
    expect(tags[0].books.isDirty()).toBe(false);
    expect(tags[0].books.count()).toBe(2);
    expect(tags[0].books.length).toBe(2);

    orm.em.clear();
    tags = await orm.em.find<BookTag>(BookTag.name);
    expect(tags[0].books.isInitialized()).toBe(false);
    expect(tags[0].books.isDirty()).toBe(false);
    expect(() => tags[0].books.getItems()).toThrowError(/Collection Book\[] of entity BookTag\[\w{24}] not initialized/);
    expect(() => tags[0].books.add(book1)).toThrowError(/Collection Book\[] of entity BookTag\[\w{24}] not initialized/);
    expect(() => tags[0].books.remove(book1, book2)).toThrowError(/Collection Book\[] of entity BookTag\[\w{24}] not initialized/);
    expect(() => tags[0].books.removeAll()).toThrowError(/Collection Book\[] of entity BookTag\[\w{24}] not initialized/);
    expect(() => tags[0].books.contains(book1)).toThrowError(/Collection Book\[] of entity BookTag\[\w{24}] not initialized/);

    // test M:N lazy init
    orm.em.clear();
    await tags[0].books.init();
    expect(tags[0].books.count()).toBe(2);
    expect(tags[0].books.getItems()[0]).toBeInstanceOf(Book);
    expect(tags[0].books.getItems()[0]._id).toBeDefined();
    expect(tags[0].books.getItems()[0].isInitialized()).toBe(true);

    // test M:N lazy init
    orm.em.clear();
    let book = await orm.em.findOne<Book>(Book.name, { tags: tag1._id });
    expect(book.tags.isInitialized()).toBe(true); // owning side is always initialized
    expect(book.tags.count()).toBe(2);
    expect(book.tags.getItems()[0]).toBeInstanceOf(BookTag);
    expect(book.tags.getItems()[0]._id).toBeDefined();
    expect(book.tags.getItems()[0].isInitialized()).toBe(false);
    await book.tags.init();
    expect(book.tags.getItems()[0].isInitialized()).toBe(true);

    // test collection CRUD
    // remove
    expect(book.tags.count()).toBe(2);
    book.tags.remove(tag1);
    await orm.em.persist(book);
    orm.em.clear();
    book = await orm.em.findOne<Book>(Book.name, book._id);
    expect(book.tags.count()).toBe(1);

    // add
    book.tags.add(tag1);
    await orm.em.persist(book);
    orm.em.clear();
    book = await orm.em.findOne<Book>(Book.name, book._id);
    expect(book.tags.count()).toBe(2);

    // contains
    expect(book.tags.contains(tag1)).toBe(true);
    expect(book.tags.contains(tag2)).toBe(false);
    expect(book.tags.contains(tag3)).toBe(true);
    expect(book.tags.contains(tag4)).toBe(false);
    expect(book.tags.contains(tag5)).toBe(false);

    // removeAll
    book.tags.removeAll();
    await orm.em.persist(book);
    orm.em.clear();
    book = await orm.em.findOne<Book>(Book.name, book._id);
    expect(book.tags.count()).toBe(0);
  });

  test('populating many to many relation', async () => {
    const p1 = new Publisher('foo');
    expect(p1.tests).toBeInstanceOf(Collection);
    expect(p1.tests.isInitialized()).toBe(true);
    expect(p1.tests.isDirty()).toBe(false);
    expect(p1.tests.count()).toBe(0);
    const p2 = new Publisher('bar');
    p2.tests.add(new Test(), new Test());
    await orm.em.persist([p1, p2]);
    const repo = orm.em.getRepository<Publisher>(Publisher.name);

    orm.em.clear();
    const publishers = await repo.findAll(['tests']);
    expect(publishers).toBeInstanceOf(Array);
    expect(publishers.length).toBe(2);
    expect(publishers[0]).toBeInstanceOf(Publisher);
    expect(publishers[0].tests).toBeInstanceOf(Collection);
    expect(publishers[0].tests.isInitialized()).toBe(true);
    expect(publishers[0].tests.isDirty()).toBe(false);
    expect(publishers[0].tests.count()).toBe(0);
    await publishers[0].tests.init(); // empty many to many on owning side should not make db calls
    expect(publishers[1].tests.getItems()[0].isInitialized()).toBe(true);
  });

  test('populating many to many relation on inverse side', async () => {
    const author = new Author('Jon Snow', 'snow@wall.st');
    const book1 = new Book('My Life on The Wall, part 1', author);
    const book2 = new Book('My Life on The Wall, part 2', author);
    const book3 = new Book('My Life on The Wall, part 3', author);
    const tag1 = new BookTag('silly');
    const tag2 = new BookTag('funny');
    const tag3 = new BookTag('sick');
    const tag4 = new BookTag('strange');
    const tag5 = new BookTag('sexy');
    book1.tags.add(tag1, tag3);
    book2.tags.add(tag1, tag2, tag5);
    book3.tags.add(tag2, tag4, tag5);
    await orm.em.persist([book1, book2, book3]);
    const repo = orm.em.getRepository<BookTag>(BookTag.name);

    orm.em.clear();
    const tags = await repo.findAll(['books']);
    expect(tags).toBeInstanceOf(Array);
    expect(tags.length).toBe(5);
    expect(tags[0]).toBeInstanceOf(BookTag);
    expect(tags[0].books).toBeInstanceOf(Collection);
    expect(tags[0].books.isInitialized()).toBe(true);
    expect(tags[0].books.isDirty()).toBe(false);
    expect(tags[0].books.count()).toBe(2);
    expect(tags[0].books.getItems()[0].isInitialized()).toBe(true);
  });

  test('hooks', async () => {
    Author.beforeDestroyCalled = 0;
    Author.afterDestroyCalled = 0;
    const repo = orm.em.getRepository<Author>(Author.name);
    const author = new Author('Jon Snow', 'snow@wall.st');
    expect(author.id).toBeNull();
    expect(author.version).toBeUndefined();
    expect(author.versionAsString).toBeUndefined();

    await repo.persist(author);
    expect(author.id).not.toBeNull();
    expect(author.version).toBe(1);
    expect(author.versionAsString).toBe('v1');

    author.name = 'John Snow';
    await repo.persist(author);
    expect(author.version).toBe(2);
    expect(author.versionAsString).toBe('v2');

    expect(Author.beforeDestroyCalled).toBe(0);
    expect(Author.afterDestroyCalled).toBe(0);
    await repo.remove(author);
    expect(Author.beforeDestroyCalled).toBe(1);
    expect(Author.afterDestroyCalled).toBe(1);

    const author2 = new Author('Johny Cash', 'johny@cash.com');
    await repo.persist(author2);
    await repo.remove(author2);
    expect(Author.beforeDestroyCalled).toBe(2);
    expect(Author.afterDestroyCalled).toBe(2);
  });

  test('canPopulate', async () => {
    const repo = orm.em.getRepository<Author>(Author.name);
    expect(repo.canPopulate('test')).toBe(false);
    expect(repo.canPopulate('name')).toBe(false);
    expect(repo.canPopulate('favouriteBook')).toBe(true);
    expect(repo.canPopulate('books')).toBe(true);
  });

   test('trying to populate non-existing or non-reference property will throw', async () => {
    const repo = orm.em.getRepository<Author>(Author.name);
    const author = new Author('Johny Cash', 'johny@cash.com');
    await repo.persist(author);
    orm.em.clear();

    await expect(repo.findAll(['tests'])).rejects.toThrowError(`Entity 'Author' does not have property 'tests'`);
    await expect(repo.findOne(author.id, ['tests'])).rejects.toThrowError(`Entity 'Author' does not have property 'tests'`);
  });

   test('many to many collection does have fixed order', async () => {
    const repo = orm.em.getRepository<Publisher>(Publisher.name);
    const publisher = new Publisher();
    const t1 = Test.create('t1');
    const t2 = Test.create('t2');
    const t3 = Test.create('t3');
    await orm.em.persist([t1, t2, t3]);
    publisher.tests.add(t2, t1, t3);
    await repo.persist(publisher);
    orm.em.clear();

    const ent = await repo.findOne(publisher.id);
    await expect(ent.tests.count()).toBe(3);
    await expect(ent.tests.getIdentifiers('id')).toEqual([t2.id, t1.id, t3.id]);

    await ent.tests.init();
    await expect(ent.tests.getIdentifiers('id')).toEqual([t2.id, t1.id, t3.id]);
  });

  test('EM supports native insert/update/delete/aggregate', async () => {
    orm.em.options.debug = false;
    const res1 = await orm.em.nativeInsert(Publisher.name, { name: 'native name 1' });
    expect(res1.insertedCount).toBe(1);

    const res2 = await orm.em.nativeUpdate(Publisher.name, { name: 'native name 1' }, { name: 'new native name' });
    expect(res2.matchedCount).toBe(1);
    expect(res2.modifiedCount).toBe(1);

    const res3 = await orm.em.aggregate(Publisher.name, [{ $match: { name: 'new native name' } }]);
    expect(res3.length).toBe(1);
    expect(res3[0]).toMatchObject({ name: 'new native name' });

    const res4 = await orm.em.nativeDelete(Publisher.name, { name: 'new native name' });
    expect(res4.deletedCount).toBe(1);
    expect(res4.deletedCount).toBe(1);

    const res5 = await orm.em.nativeInsert(Publisher.name, { createdAt: new Date('1989-11-17'), updatedAt: new Date('2018-10-28'), name: 'native name 2' });
    expect(res5.insertedCount).toBe(1);

    const res6 = await orm.em.nativeUpdate(Publisher.name, { name: 'native name 2' }, { name: 'new native name', updatedAt: new Date('2018-10-28') });
    expect(res6.matchedCount).toBe(1);
    expect(res6.modifiedCount).toBe(1);
  });

  afterAll(async () => orm.close(true));

});
