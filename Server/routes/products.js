const express = require('express');
const { getProducts } = require('../controllers/products');

const router = express.Router();

router.get('/products/:category', getProducts);

module.exports = router;