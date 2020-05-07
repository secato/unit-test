import Book from '../src/Book';
import Library from '../src/Library';

let library: Library;

beforeEach(() => {
  library = new Library();
  library.addBook(new Book('Dune', 'Frank Herbert'));
  library.addBook(new Book('Solaris', 'Stanislaw Lem'));
});

describe('Library class', () => {
  describe('Get a book', () => {
    test('It should get the book', () => {
      const currentBook = library.getBook('Dune');
      expect(currentBook?.getTitle()).toBe('Dune');
    });

    test("It should get null if book doesn't exists", () => {
      const book = library.getBook('Anything');
      expect(book).toBe(null);
    });
  });

  test('Add books', () => {
    const dune = library.getBook('Dune');
    expect(dune?.getTitle()).toBe('Dune');

    const solaris = library.getBook('Solaris');
    expect(solaris?.getTitle()).toBe('Solaris');
  });

  test('Get library size', () => {
    expect(library.getNumBooks()).toBe(2);
  });
});
