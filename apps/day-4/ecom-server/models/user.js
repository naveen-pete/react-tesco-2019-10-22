const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const config = require('config');

const validate = user => {
  const schema = Joi.object().keys({
    name: Joi.string().min(3).max(250).required(),
    email: Joi.string().min(3).max(250).required().email(),
    password: Joi.string().min(3).max(250).required(),
    isAdmin: Joi.boolean().optional()
  });

  return Joi.validate(user, schema);
};

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 250,
    required: true
  },
  email: {
    type: String,
    minlength: 3,
    maxlength: 250,
    required: true,
    unique: true
  },
  password: {
    type: String,
    minlength: 3,
    maxlength: 1000,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

userSchema.methods.generateAuthToken = function () {
  const payload = _.pick(this, ['_id', 'name', 'isAdmin']);
  const secretKey = config.get('app-secret-key');
  const token = jwt.sign(payload, secretKey);
  return token;
};

const User = mongoose.model('user', userSchema);

module.exports = { validate, User };
