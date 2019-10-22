// Importing defaults

// ---------------------------------------------
// NOTE: 
// To run this file, use following Node.js command
//    node --experimental-modules file-name
// Replace file-name with actual file name
// ---------------------------------------------

import Book from './my-module';

const book = new Book(
  'JavaScript: The Good Parts',
  'Douglas Crockford'
);

console.log(book);
// Book {
//   name: 'JavaScript: The Good Parts',
//   author: 'Douglas Crockford' }
