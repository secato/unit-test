import MockDatabase from '../src/MockDatabase';
import LibraryDB from '../src/LibraryDB';

describe('Library DB', () => {
  test('Get book', () => {
    const mock = new MockDatabase();
    const libraryDb = new LibraryDB(mock);

    const book = libraryDb.getBook('Cosmos', 'Carl Sagan');
    expect(mock.validate()).toBe(true);
  });
});
