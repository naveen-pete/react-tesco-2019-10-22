// Ignoring some values
function getCities() {
   return ['Bengaluru', 'Mumbai', 'Chennai'];
}

let [c1, , c2] = getCities();

console.log(c1); // 'Bengaluru'
console.log(c2); // 'Chennai'