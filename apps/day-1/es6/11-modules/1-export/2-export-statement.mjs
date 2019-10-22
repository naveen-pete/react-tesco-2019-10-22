// Export statements

// ---------------------------------------------
// NOTE: 
// To run this file, use following Node.js command
//    node --experimental-modules file-name
// Replace file-name with actual file name
// ---------------------------------------------

const PI = 3.14;

function showBook({ name: bookName, author }) {
  console.log(`The book ${bookName} is authored by ${author}.`);
}

// export showBook with a new name – displayBook
// export PI as it is, without renaming
export { showBook as displayBook, PI };
