const Joi = require('@hapi/joi');

const validate = login => {
  const schema = Joi.object().keys({
    email: Joi.string().min(3).max(250).required().email(),
    password: Joi.string().min(3).max(250).required(),
  });

  return Joi.validate(login, schema);
};

module.exports = { validate };
