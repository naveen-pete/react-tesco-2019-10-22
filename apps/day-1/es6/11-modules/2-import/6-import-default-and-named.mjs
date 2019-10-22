// Importing default and named exports together

// ---------------------------------------------
// NOTE: 
// To run this file, use following Node.js command
//    node --experimental-modules file-name
// Replace file-name with actual file name
// ---------------------------------------------

import Book, { showBook } from './my-module';

const book = new Book(
  'JavaScript: The Good Parts',
  'Douglas Crockford'
);

showBook(book);
