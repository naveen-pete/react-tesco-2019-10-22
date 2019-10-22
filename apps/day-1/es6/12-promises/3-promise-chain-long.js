// Promise chaining - multiple server request

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
    console.log('user:', users[0]);   // user object returned by the server
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`)
  })
  .then(response => response.json())
  .then(posts => {
    console.log('posts:', posts);  // array of posts for the user
  })
  .catch(error => {
    console.log('Request Error:', error);
  });
