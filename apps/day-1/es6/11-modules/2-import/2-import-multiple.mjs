// Import multiple exports from module

// ---------------------------------------------
// NOTE: 
// To run this file, use following Node.js command
//    node --experimental-modules file-name
// Replace file-name with actual file name
// ---------------------------------------------

import { PI, showBook } from './my-module';

console.log('PI =', PI);

const book = {
  name: 'JavaScript: The Good Parts',
  author: 'Douglas Crockford'
}
showBook(book);
