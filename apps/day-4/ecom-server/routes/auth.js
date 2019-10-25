const express = require('express');
const _ = require('lodash');

const { validate } = require('../models/auth');
const { User } = require('../models/user');
const { compareHash } = require('../helpers/hash');

const router = express.Router();

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid user or password.' });
    }

    const result = await compareHash(req.body.password, user.password);
    if (!result) {
      return res.status(400).json({ message: 'Invalid user or password.' });
    }

    const token = user.generateAuthToken();

    res.json({ token, user: _.pick(user, ['_id', 'name', 'isAdmin']) });
  } catch (e) {
    res.json({ message: 'Server error.' });
    console.log('ERROR:', e.message);
  }
});

module.exports = router;
