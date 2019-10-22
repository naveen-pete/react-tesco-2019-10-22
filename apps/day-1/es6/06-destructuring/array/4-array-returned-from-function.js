// Parsing an array returned from a function
function getCities() {
   return ['Bengaluru', 'Mumbai'];
}

let [c1, c2] = getCities();

console.log(c1); // 'Bengaluru'
console.log(c2); // 'Mumbai'
