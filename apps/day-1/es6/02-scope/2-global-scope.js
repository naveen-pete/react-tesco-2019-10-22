// Global scope example
var x = "declared outside function";

someFunction();

function someFunction() {
   console.log("Inside function");
   console.log(x);
}

console.log("Outside function");
console.log(x);
