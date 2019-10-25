// Custom middleware
const log = (req, res, next) => {
  console.log('log() - url:', req.url, ', method:', req.method);
  next();
};

module.exports = log;