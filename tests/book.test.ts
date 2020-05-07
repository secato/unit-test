import Book from '../src/Book';

describe('Book class', () => {
  test('Should create a book with title', () => {
    const book = new Book('My first book', '');
    expect(book.getTitle()).toBe('My first book');
  });

  test('Should create a book with author', () => {
    const book = new Book('', 'Author');
    expect(book.getAuthor()).toBe('Author');
  });
});
