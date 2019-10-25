const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'category', required: true },
  imageUrl: { type: String, required: true }
});

const Product = mongoose.model('product', productSchema);

const validate = product => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    imageUrl: Joi.string().required()
  });

  return Joi.validate(product, schema, { convert: false });
};

module.exports = {
  validate,
  Product
};
