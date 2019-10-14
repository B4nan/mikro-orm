import { Collection, Entity, OneToMany, Property, IdEntity, PrimaryKey } from '../../lib';
import { BookWp } from './Book';

@Entity()
export class AuthorWp implements IdEntity<AuthorWp> {

  @PrimaryKey({ type: 'number' })
  id: number;

  @Property({ type: 'string' })
  name: string;

  @Property({ type: 'string' })
  email: string;

  @Property({ type: 'number' })
  age?: number;

  @OneToMany({entity: () => BookWp, mappedBy: book => book.author})
  books = new Collection<BookWp>(this);

}
