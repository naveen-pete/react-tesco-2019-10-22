const users = [
  { id: 1, name: 'ram' },
  { id: 2, name: 'hari' },
  { id: 3, name: 'krish' }
];

const posts = [
  { id: 1, userId: 1, title: 'ram-p1' },
  { id: 2, userId: 1, title: 'ram-p2' },
  { id: 3, userId: 2, title: 'hari-p1' },
  { id: 4, userId: 2, title: 'hari-p2' },
  { id: 5, userId: 3, title: 'krish-p1' },
  { id: 6, userId: 3, title: 'krish-p2' }
];

// ES5
// module.exports = {
//   users: users,
//   posts: posts
// };

// ES6
module.exports = {
  users,
  posts
};
