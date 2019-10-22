// Default parameters - ES2015
function multiply(a, b = 1) {
   return a * b;
}

console.log(multiply(5, 2)); // 10
console.log(multiply(5));    // 5
