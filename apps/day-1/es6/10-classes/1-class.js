// Class declaration
class Book {
   constructor(name, author) {
      this.name = name;
      this.author = author;
   }

   show() {
      console.log(`Book name: ${this.name}`);
      console.log(`Author: ${this.author}`);
   }
}

// Creating an object
const book = new Book(
   'JavaScript: The Good Parts', 'Douglas Crockford'
);

// Accessing members
console.log(book.name);  // JavaScript: The Good Parts
book.show();  // Book name: JavaScript: The Good Parts
              // Author: Douglas Crockford
