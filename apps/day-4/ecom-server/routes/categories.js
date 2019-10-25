const express = require('express');
const router = express.Router();

const { Category } = require('../models/category');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.find().select({ __v: 0 });
    res.json(categories);
  } catch (e) {
    res.status(500).json({ message: 'Server error.' });
    console.log('Error:', e.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).select({ __v: 0 });

    if (!category) {
      return res.status(404).json({ message: 'Category does not exist!' });
    }

    res.json(category);
  } catch (e) {
    res.status(500).json({ message: 'Server error.' });
    console.log('Error:', e.message);
  }
});

module.exports = router;