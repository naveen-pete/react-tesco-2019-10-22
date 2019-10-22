// Import a single export from a module

// ---------------------------------------------
// NOTE: 
// To run this file, use following Node.js command
//    node --experimental-modules file-name
// Replace file-name with actual file name
// ---------------------------------------------

import { showBook } from './my-module';

const book = {
  name: 'JavaScript: The Good Parts',
  author: 'Douglas Crockford'
}
showBook(book);
