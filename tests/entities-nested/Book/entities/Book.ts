import { ObjectID } from 'mongodb';
import { Cascade, Collection, Entity, ManyToMany, ManyToOne, PrimaryKey, Property } from '../../../../lib';
import { Publisher } from '../../entities/Publisher';
import { Author } from '../../Author/entities/Author';
import { BookTag } from '../../entities/book-tag';
import { BaseEntity3 } from '../../entities/BaseEntity3';

@Entity({ collection: 'books-table' })
export class Book extends BaseEntity3 {
  @PrimaryKey()
  _id: ObjectID;

  @Property()
  title: string;

  @ManyToOne()
  author: Author;

  @ManyToOne({ cascade: [Cascade.PERSIST, Cascade.REMOVE] })
  publisher: Publisher;

  @ManyToMany({ entity: () => BookTag.name, inversedBy: 'books' })
  tags = new Collection<BookTag>(this);

  @Property()
  metaObject: object;

  @Property()
  metaArray: any[];

  @Property()
  metaArrayOfStrings: string[];

  constructor(title: string, author?: Author) {
    super();
    this.title = title;
    this.author = author as Author;
  }

  toJSON(
    strict = true,
    strip = ['metaObject', 'metaArray', 'metaArrayOfStrings'],
    ...args: any[]
  ): { [p: string]: any } {
    const o = this.toObject(...args);

    if (strict) {
      strip.forEach(k => delete o[k]);
    }

    return o;
  }
}
