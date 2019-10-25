const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("<h2>Welcome to eCommerce App API</h2>");
  // res.render('product', {
  //   productName: 'One Plus 7',
  //   productPrice: 50000
  // });
});

module.exports = router;