import Database from './Database';
import Book from './Book';

export default class MockDatabase implements Database {
  private connected = false;
  private closed = false;

  connect(): void {
    this.connected = true;
  }
  close(): void {
    this.closed = true;
  }

  selectBook(title: string, author: string): Book | null {
    return null;
  }

  validate() {
    return this.connected && this.closed;
  }
}
