// Assigning the rest of an array to a variable
const cities = ['Bengaluru', 'Mumbai', 'Chennai', 'Pune'];

let [c1, c2, ...rest] = cities;

console.log(c1);    // 'Bengaluru'
console.log(c2);    // 'Mumbai’
console.log(rest);  // ['Chennai', 'Pune']
