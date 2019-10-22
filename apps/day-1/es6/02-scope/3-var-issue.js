
// Issues with ‘var’ declarations
var x = 1;
console.log('before:', x);

{
   console.log('inside1:', x);
   // let x = 2;
   console.log('inside2:', x);
}

console.log('after:', x);  // logs 2
