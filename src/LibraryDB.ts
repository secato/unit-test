import Database from './Database';
import Book from './Book';

export default class LibraryDB {
  private connection: Database;

  constructor(db: Database) {
    this.connection = db;
  }

  getBook(title: string, author: string): Book | null {
    this.connection.connect();
    const book = this.connection.selectBook(title, author);
    this.connection.close();
    return book;
  }
}
