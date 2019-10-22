// Default parameters may appear before those without defaults
function multiply(a = 1, b) {
  return a * b;
}

console.log(multiply(2, 5));          // 10
console.log(multiply(5));             // NaN
console.log(multiply(undefined, 5));  // 5
