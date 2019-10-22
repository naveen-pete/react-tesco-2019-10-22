// Function scope
function someFunction() {
   var x = "declared inside function";  // x can only be used in someFunction
   console.log("Inside function");
   console.log(x);
}

someFunction();
// console.log(x);   // Causes error
