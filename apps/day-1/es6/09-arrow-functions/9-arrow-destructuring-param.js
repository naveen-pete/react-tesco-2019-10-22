// Arrow function syntax
// Destructuring within the parameter list
const showBook = ({ name: bookName, author }) => {
  console.log(`The book ${bookName} is authored by ${author}.`);
};

const book = {
  id: 100,
  name: 'JavaScript: The Good Parts',
  author: 'Douglas Crockford',
  price: 375,
  publisher: 'Shroff'
};

showBook(book);
