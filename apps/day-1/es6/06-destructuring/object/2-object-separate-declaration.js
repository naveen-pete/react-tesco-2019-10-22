// Assignment without declaration
let a, b;
({ a, b } = { a: 1, b: 2 });

console.log(a);  // 1
console.log(b);  // 2
