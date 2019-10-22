// Exporting a declaration

// ---------------------------------------------
// NOTE: 
// To run this file, use following Node.js command
//    node --experimental-modules file-name
// Replace file-name with actual file name
// ---------------------------------------------

// Export a constant
export const PI = 3.14;

// Export a function
export function showBook({ name: bookName, author }) {
  console.log(`The book ${bookName} is authored by ${author}.`);
}

// Export a class
export class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }
}
