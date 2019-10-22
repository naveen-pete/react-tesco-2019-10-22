// Rest parameter should be the last parameter
function greet(greeting, ...names) {
   return `${greeting} ${names.join(", ")}!`;
}

console.log(greet("Hello", "Steve", "Bill"));
// Hello Steve, Bill!

console.log(greet("Hello"));
// Hello !
