import Book from './Book';
import Library from './Library';

const library = new Library();
const dune = new Book('Dune', 'Author1');
const thePowerOfNow = new Book('The power of now', 'Eckhart Tolle');

library.addBook(dune);
library.addBook(thePowerOfNow);

console.log(library.getBook('Dune')?.getAuthor());
