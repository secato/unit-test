import Book from './Book';

export default class Library {
  collection: Book[];

  constructor() {
    this.collection = [];
  }

  addBook(book: Book) {
    this.collection.push(book);
  }

  getBook(title: String) {
    return this.collection.find((book) => book.getTitle() === title) || null;
  }

  getNumBooks() {
    return this.collection.length;
  }
}
