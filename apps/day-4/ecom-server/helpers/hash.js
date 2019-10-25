const bcrypt = require('bcrypt');

const createHash = async (password) => {
  return bcrypt.hash(password, 10);
}

const compareHash = async (password, hash) => {
  return bcrypt.compare(password, hash);
}

module.exports = { createHash, compareHash };
