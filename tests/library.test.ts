import Book from '../src/Book';
import Library from '../src/Library';

let library: Library;

beforeEach(() => {
  library = new Library();
  library.addBook(new Book('Dune', 'Frank Herbert'));
  library.addBook(new Book('Solaris', 'Stanislaw Lem'));
  library.addBook(new Book('Dune2', 'Frank Herbert'));
});

describe('Library class', () => {
  describe('Get book', () => {
    test('By title', () => {
      const book = library.getBook('Dune');
      expect(book?.getTitle()).toBe('Dune');
    });

    test('Get book by title and author', () => {
      const book = library.getBook('Dune', 'Frank Herbert');
      expect(book?.getTitle()).toBe('Dune');
    });

    test('Get a inexistent book', () => {
      const book = library.getBook('Anything');
      expect(book).toBe(null);
    });

    test('Get books by author', () => {
      const books = library.getBooks('Frank Herbert');
      expect(books.length).toBe(2);
      expect(books[0].getTitle()).toBe('Dune');
      expect(books[1].getTitle()).toBe('Dune2');
    });

    test('Get books by inexistent author', () => {
      const books = library.getBooks('Inexistent');
      expect(books.length).toBe(0);
    });
  });

  test('Get library size', () => {
    expect(library.getNumBooks()).toBe(3);
  });

  describe('Remove book', () => {
    test('Remove book and check if is true', () => {
      const removed = library.removeBook('Dune');
      expect(removed?.getTitle()).toBe('Dune');
    });

    test('Remove a inexistent book and check result if is false', () => {
      const removed = library.removeBook('Fake');
      expect(removed).toBe(null);
    });

    test('Remove book and try to get the removed one', () => {
      library.removeBook('Dune');
      const book = library.getBook('Dune');
      expect(book).toBe(null);
    });
  });
});
