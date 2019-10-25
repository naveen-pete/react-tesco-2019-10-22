const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).send({ message: 'Not authenticated. Auth token missing.' });
  }

  try {
    const secretKey = config.get('app-secret-key');
    const payload = jwt.verify(token, secretKey);
    req.user = payload;
  } catch (e) {
    return res.status(401).send({ message: 'Invalid token.' });
  }

  next();
};