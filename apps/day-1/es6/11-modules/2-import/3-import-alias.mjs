// Import an export with a more convenient alias

// ---------------------------------------------
// NOTE: 
// To run this file, use following Node.js command
//    node --experimental-modules file-name
// Replace file-name with actual file name
// ---------------------------------------------

import { showBook as displayBook } from './my-module';

const book = {
  name: 'JavaScript: The Good Parts',
  author: 'Douglas Crockford'
}
displayBook(book);
