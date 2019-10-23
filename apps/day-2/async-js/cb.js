const { users, posts } = require('./data');

const getUser = (userName, cb) => {
  if (userName.trim().length === 0) {
    return cb(`User name should not be empty.`);
  }

  setTimeout(() => {
    const user = users.find(u => u.name === userName);
    cb(null, user);
  }, 3000);
};

const getPosts = (userId, cb) => {
  if (isNaN(userId)) {
    return cb('User id should be numeric.');
  }

  setTimeout(() => {
    const postsForUser = posts.filter(p => p.userId === userId);
    cb(null, postsForUser);
  }, 3000);
}

console.log('begin');

getUser('', (err, user) => {
  if (err) {
    return console.log('getUser() - Error:', err);
  }

  console.log('user:', user);
  getPosts(user.id, (err, posts) => {
    if (err) {
      return console.log('getPosts() - Error:', err);
    }

    console.log('posts:', posts);
  });
});

// getUser('a', () => {});

console.log('end');
