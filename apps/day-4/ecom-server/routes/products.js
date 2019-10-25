const express = require('express');

const { Product, validate } = require('../models/product');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const products = await Product
        .find()
        .populate('category')
        .select({ __v: 0 });

      res.json(products);
    } catch (e) {
      res.status(500).json({ message: 'Server error.' });
      console.log('Error:', e.message);
    }
  })
  .post(auth, async (req, res) => {
    const result = validate(req.body);
    if (result.error) {
      return res.status(400).json({ message: result.error.details[0].message })
    }

    try {
      const { name, description, price, category, imageUrl } = req.body;
      let product = await Product.create({
        name, description, price, category, imageUrl
      });

      const opts = [{ path: 'category' }]
      product = await Product.populate(product, opts);

      res.status(201).json(product);
    } catch (e) {
      res.status(500).json({ message: 'Server error.' });
      console.log('Error:', e.message);
    }
  });

router.route('/:id')
  .get(async (req, res) => {
    try {
      const product = await Product
        .findById(req.params.id)
        .populate('category')
        .select({ __v: 0 });
      console.log(product);

      if (!product) {
        return res.status(404).json({ message: 'Product does not exist!' });
      }

      res.json(product);

    } catch (e) {
      res.status(500).json({ message: 'Server error.' });
      console.log('Error:', e.message);
    }
  })
  .put(auth, async (req, res) => {
    const result = validate(req.body);
    if (result.error) {
      return res.status(400).json({ message: result.error.details[0].message })
    }

    try {
      const product = await Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        imageUrl: req.body.imageUrl
      }, { new: true }).populate('category');

      res.json(product);
    } catch (e) {
      res.status(500).json({ message: 'Server error.' });
      console.log('Error:', e.message);
    }
  })
  .delete([auth, admin], async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id)
      if (!product) {
        return res.status(404).json({ message: 'Product does not exist!' });
      }
      res.json(product);
    } catch (e) {
      res.status(500).json({ message: 'Server error.' });
      console.log('Error:', e.message);
    }
  });

module.exports = router;
