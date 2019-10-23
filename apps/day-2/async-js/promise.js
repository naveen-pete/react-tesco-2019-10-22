const { users, posts } = require('./data');

const getUser = userName => {
  return new Promise((resolve, reject) => {
    if (userName.trim().length === 0) {
      return reject(`User name should not be empty.`);
    }

    setTimeout(() => {
      const user = users.find(u => u.name === userName);
      resolve(user);
    }, 3000);
  });
};

const getPosts = userId => {
  return new Promise((resolve, reject) => {
    if (isNaN(userId)) {
      return reject('User id should be numeric.');
    }

    setTimeout(() => {
      const postsForUser = posts.filter(p => p.userId === userId);
      resolve(postsForUser);
    }, 3000);
  });
};

console.log('begin');

getUser('hari')
  .then(user => {
    console.log('user:', user);
    return getPosts(user.id);
  })
  .then(posts => {
    console.log('posts for user:', posts);
  })
  .catch(err => console.log('Error:', err));

console.log('end');
