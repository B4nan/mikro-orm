import { ObjectId } from 'mongodb';
import { Collection, MongoEntity, EntitySchema } from '../../lib';
import { Book } from './Book';

export class BookTag implements MongoEntity<BookTag> {

  _id!: ObjectId;
  id!: string;
  name: string;
  books = new Collection<Book>(this);

  constructor(name: string) {
    this.name = name;
  }

}

export const schema = new EntitySchema<BookTag>({
  class: BookTag,
  properties: {
    _id: { type: 'ObjectId', primary: true },
    id: { type: 'string', serializedPrimaryKey: true },
    name: { type: 'string' },
    books: { reference: 'm:n', entity: () => Book, mappedBy: 'tags' },
  },
});
