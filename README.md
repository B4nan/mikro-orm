# MikroORM

Simple typescript ORM for node.js based on data-mapper, unit-of-work and identity-map patterns. Supports MongoDB,
MySQL and SQLite databases. 

Heavily inspired by [Doctrine](https://www.doctrine-project.org/) and [Nextras Orm](https://nextras.org/orm/).

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4fc24bb70323474180b67bc14838c416)](https://app.codacy.com/app/B4nan/mikro-orm?utm_source=github.com&utm_medium=referral&utm_content=B4nan/mikro-orm&utm_campaign=Badge_Grade_Settings)
[![](https://img.shields.io/npm/v/mikro-orm.svg)](https://www.npmjs.com/package/mikro-orm)
[![Chat on slack](https://img.shields.io/badge/chat-on%20slack-blue.svg)](https://join.slack.com/t/mikroorm/shared_invite/enQtNTM1ODYzMzM4MDk3LTBmZDNlODBhYjcxNGZlMTkyYzJmODAwMDhjODc0ZTM2MzQ2Y2VkOGM0ODYzYTJjMDRiZDdjMmIxYjI2OTY0Y2U)
[![](https://img.shields.io/npm/dm/mikro-orm.svg)](https://www.npmjs.com/package/mikro-orm)
[![Dependency Status](https://david-dm.org/B4nan/mikro-orm.svg)](https://david-dm.org/B4nan/mikro-orm)
[![Build Status](https://travis-ci.com/B4nan/mikro-orm.svg?branch=master)](https://travis-ci.com/B4nan/mikro-orm)
[![Coverage Status](https://img.shields.io/coveralls/B4nan/mikro-orm.svg)](https://coveralls.io/r/B4nan/mikro-orm?branch=master)

## Documentation

MikroORM's documentation, included in this repo in the root directory, is built with 
[Jekyll](https://jekyllrb.com/) and publicly hosted on GitHub Pages at https://b4nan.github.io/mikro-orm/.

> **Current documentation is for upcoming version 2.**
>
> You can install it via `mikro-orm@next` tag.

## Core features

- [Clean and simple entity definition](https://b4nan.github.io/mikro-orm/defining-entities/)
- [Identity Map](https://b4nan.github.io/mikro-orm/identity-map/)
- [Entity references](https://b4nan.github.io/mikro-orm/entity-references/)
- [Using entity constructors](https://b4nan.github.io/mikro-orm/using-entity-constructors/)
- [Collections](https://b4nan.github.io/mikro-orm/collections/)
- [Preloading deeply nested structures via populate](https://b4nan.github.io/mikro-orm/nested-populate/)
- [Property validation](https://b4nan.github.io/mikro-orm/property-validation/)
- [Lifecycle hooks](https://b4nan.github.io/mikro-orm/lifecycle-hooks/)

## Quick start

Fist install the module via `yarn` or `npm` and do not forget to install the database driver as well:

```
$ yarn add mikro-orm mongodb # for mongo
$ yarn add mikro-orm mysql2 # for mysql
$ yarn add mikro-orm sqlite # for sqlite
```

or

```
$ npm i -s mikro-orm mongodb # for mongo
$ npm i -s mikro-orm mysql2 # for mysql
$ npm i -s mikro-orm sqlite # for sqlite
```

Then call `MikroORM.init` as part of bootstrapping your app:

```typescript
const orm = await MikroORM.init({
  entitiesDirs: ['entities'], // relative to `baseDir`
  dbName: 'my-db-name',
  clientUrl: '...', // defaults to 'mongodb://localhost:27017' for mongodb driver
});
console.log(orm.em); // access EntityManager via `em` property
```

Then you will need to fork entity manager for each request so their 
[identity maps](https://b4nan.github.io/mikro-orm/identity-map/) will not collide. 
To do so, use the `RequestContext` helper:

```typescript
const app = express();

app.use((req, res, next) => {
  RequestContext.create(orm.em, next);
});
```

You should register this middleware as the last one just before request handlers and before
any of your custom middleware that is using the ORM. There might be issues when you register 
it before request processing middleware like `queryParser` or `bodyParser`, so definitely 
register the context after them. 

More info about `RequestContext` is described [here](https://b4nan.github.io/mikro-orm/identity-map/#request-context).

Now you can start defining your entities (in one of the `entitiesDirs` folders):

**`./entities/Book.ts`**

```typescript
@Entity()
export class Book {

  @PrimaryKey()
  _id: ObjectID;

  @Property()
  title: string;

  @ManyToOne()
  author: Author;

  @ManyToMany({ entity: () => BookTag.name, inversedBy: 'books' })
  tags = new Collection<BookTag>(this);

  constructor(title: string, author: Author) {
    this.title = title;
    this.author = author;
  }

}

export interface Book extends IEntity { }
```

More information can be found in
[defining entities section](https://b4nan.github.io/mikro-orm/defining-entities/) in docs.

When you have your entities defined, you can start using ORM either via `EntityManager`
or via `EntityRepository`s.

To save entity state to database, you need to persist it. Persist takes care or deciding 
whether to use `insert` or `update` and computes appropriate change-set. Entity references
that are not persisted yet (does not have identifier) will be cascade persisted automatically. 

```typescript
// use constructors in your entities for required parameters
const author = new Author('Jon Snow', 'snow@wall.st');
author.born = new Date();

const publisher = new Publisher('7K publisher');

const book1 = new Book('My Life on The Wall, part 1', author);
book1.publisher = publisher;
const book2 = new Book('My Life on The Wall, part 2', author);
book2.publisher = publisher;
const book3 = new Book('My Life on The Wall, part 3', author);
book3.publisher = publisher;

// just persist books, author and publisher will be automatically cascade persisted
await orm.em.persist([book1, book2, book3]);
```

To fetch entities from database you can use `find()` and `findOne()` of `EntityManager`: 

```typescript
const authors = orm.em.find(Author.name, {});

for (const author of authors) {
  console.log(author); // instance of Author entity
  console.log(author.name); // Jon Snow

  for (const book of author.books) { // iterating books collection
    console.log(book); // instance of Book entity
    console.log(book.title); // My Life on The Wall, part 1/2/3
  }
}
```

More convenient way of fetching entities from database is by using `EntityRepository`, that
carries the entity name so you do not have to pass it to every `find` and `findOne` calls:

```typescript
const booksRepository = orm.em.getRepository<Book>(Book.name);
const books = await booksRepository.find({ author: '...' }, ['author'], { title: -1 });
console.log(books); // Book[]
```

Take a look at docs about [working with `EntityManager`](https://b4nan.github.io/mikro-orm/entity-manager/)
or [using `EntityRepository` instead](https://b4nan.github.io/mikro-orm/repositories/).
