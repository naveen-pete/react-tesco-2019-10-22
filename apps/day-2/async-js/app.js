function getUser(id, cb) {
  console.log(' getUser() operation started..')
  // issue http request to the server

  setTimeout(() => {
    console.log(' setTimeout callback invoked..');
    cb({
      id: id,
      name: 'Ram'
    });
  }, 3000);
}

console.log('Begin');
getUser(10, (user) => {
  console.log(' user:', user);
});
console.log('End');