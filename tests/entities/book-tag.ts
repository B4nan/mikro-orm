import { ObjectId } from 'mongodb';
import { Collection, Entity, ManyToMany, PrimaryKey, Property, IEntity } from '../../lib';
import { Book } from './Book';

@Entity()
export class BookTag {

  @PrimaryKey()
  _id: ObjectId;

  @Property()
  name: string;

  @ManyToMany({ entity: () => Book.name, mappedBy: 'tags' })
  books: Collection<Book> = new Collection<Book>(this);

  constructor(name: string) {
    this.name = name;
  }

}

export interface BookTag extends IEntity { }
