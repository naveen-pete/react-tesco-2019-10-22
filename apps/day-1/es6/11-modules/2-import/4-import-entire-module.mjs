// Import an entire module's contents

// ---------------------------------------------
// NOTE: 
// To run this file, use following Node.js command
//    node --experimental-modules file-name
// Replace file-name with actual file name
// ---------------------------------------------

import * as myModule from './my-module';

console.log('PI =', myModule.PI);

const book = {
  name: 'JavaScript: The Good Parts',
  author: 'Douglas Crockford'
}
myModule.showBook(book);
