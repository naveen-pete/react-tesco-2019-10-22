const express = require('express');
const _ = require('lodash');

const { createHash } = require('../helpers/hash');
const { User, validate } = require('../models/user');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const router = express.Router();

router.route('/')
  .get([auth, admin], async (req, res) => {
    try {
      const users = await User.find().select('_id name email isAdmin');
      res.json(users);
    } catch (e) {
      res.json({ message: 'Server error.' });
      console.log('ERROR:', e.message);
    }
  })
  .post(async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message })
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ message: 'User already registered.' });
      }

      let newUser = _.pick(req.body, ['name', 'email', 'password', 'isAdmin']);
      newUser.password = await createHash(newUser.password);
      user = await User.create(newUser);

      res.json(_.pick(user, ['_id', 'name', 'email', 'isAdmin']));
    } catch (e) {
      res.json({ message: 'Server error.' });
      console.log('ERROR:', e.message);
    }
  });

module.exports = router;