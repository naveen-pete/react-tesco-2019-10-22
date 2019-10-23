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
}

const getUserAndPosts = async () => {
  try {
    const user = await getUser('ram');
    console.log('user:', user);

    const posts = await getPosts(user.id);
    console.log('posts for the user:', posts);
  } catch (e) {
    console.log('Error:', e);
  }
};

console.log('begin');
getUserAndPosts();
console.log('end');
