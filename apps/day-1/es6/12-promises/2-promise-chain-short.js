// Promise chaining - single server request

// ---------------------------------------------
// NOTE: 
// This code will not run in Node.js.
// Therefore run it in Developer Console window of 
// the browser
// ---------------------------------------------

username = 'Samantha';
fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
  .then(response => response.json())
  .then(users => {
    console.log('users:', users);   // users array returned by the server
  })
  .catch(error => {
    console.log('Request Error:', error);
  });
