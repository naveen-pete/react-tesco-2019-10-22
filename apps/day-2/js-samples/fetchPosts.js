const apiUrl = 'http://localhost:3001/posts123';

const getPosts = () => {
  console.log('getPosts() invoked');
  return fetch(apiUrl)
    .then((response) => {

      console.log('then callback:', response);
      return response.json();
    })
    .then((posts) => {
      console.log('second then posts:', posts);
    })
    .catch((error) => {
      console.log('catch callback:', error);
    });
};

getPosts();
