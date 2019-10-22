// ‘var’ vs ‘let’
var x = 1;
let y = 1;

if (true) {
   console.log('inside block');

   var x = 2;
   console.log(x);
   // expected output: 2

   let y = 2;
   console.log(y);
   // expected output: 2
}

console.log('outside block');

console.log(x);
// expected output: 2

console.log(y);
// expected output: 1
