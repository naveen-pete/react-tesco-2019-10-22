
const getUser = (username, onUser) => {
  console.log('getUser() invoked.');
  // ajax request to the server 
  // passing username as a parameter

  setTimeout(() => {
    const user = {
      id: 10,
      name: 'Ram',
      username: username
    };

    onUser(user);
  }, 2000);
};

const handleUser = (user) => {
  console.log('user:', user);
}

console.log('begin');

let userEmail = 'ram@gmail.com';
getUser(userEmail, handleUser);

// getUser(userEmail, (user) => {
//   console.log('user:', user);
// });

console.log('end');
