// Arrow function syntax
// Rest parameter
const greet = (greeting, ...names) => {
  return `${greeting} ${names.join(", ")}!`;
}

console.log(greet("Hello", "Steve", "Bill"));
// Hello Steve, Bill!

console.log(greet("Hello"));
// Hello !
