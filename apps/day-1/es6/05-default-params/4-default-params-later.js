// Previous parameters are available to later default parameters
function greet(name, greeting, message = `${greeting} ${name}`) {
   return [name, greeting, message];
}

console.log(greet('David', 'Hi'));
// ["David", "Hi", "Hi David"]

console.log(greet('David', 'Hi', 'Happy Birthday!'));
// ["David", "Hi", "Happy Birthday!"]
