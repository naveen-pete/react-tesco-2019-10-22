// Default parameters - ES5 workaround
function multiply(a, b) {
   b = (typeof b !== 'undefined') ? b : 1;
   return a * b;
}

console.log(multiply(5, 2)); // 10
console.log(multiply(5));    // 5
