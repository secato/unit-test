import Book from './Book';

export default interface Database {
  connect(): void;
  close(): void;
  selectBook(title: string, author: string): Book | null;
}
