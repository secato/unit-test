import Library from '../src/Library';
import Book from '../src/Book';

let library: Library;

// populate library with a 100 thousand books
beforeEach(() => {
  library = new Library();
  for (let i = 0; i < 1000000; i++) {
    library.addBook(new Book(`Book ${i}`, `Author ${i}`));
  }
});

test('Get book under X milliseconds', () => {
  const maxTime = 50;
  const startTime = process.hrtime();
  const book = library.getBook('Book 999999');
  const time = process.hrtime(startTime);

  const endTime = time[1] / 1000000;
  

  expect(endTime < maxTime).toBe(true);
  expect(book?.getTitle()).toBe('Book 999999');
});
