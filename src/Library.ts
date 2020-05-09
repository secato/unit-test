import Book from './Book';

export default class Library {
  collection: Book[];

  constructor() {
    this.collection = [];
  }

  addBook(book: Book) {
    this.collection.push(book);
  }

  removeBook(title: string) {
    const index = this.collection.findIndex(
      (book) => book.getTitle() === title
    );

    if (index === -1) {
      return null;
    }

    return this.collection.splice(index, 1)[0];
  }

  getBook(title: string, author: string = '') {
    return (
      this.collection.find((book) => {
        if (author) {
          return book.getTitle() === title && book.getAuthor() === author;
        }

        return book.getTitle() === title;
      }) || null
    );
  }

  getBooks(author: string) {
    return this.collection.filter((book) => book.getAuthor() === author);
  }

  getNumBooks() {
    return this.collection.length;
  }
}
