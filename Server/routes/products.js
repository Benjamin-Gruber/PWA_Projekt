const express = require('express');
const { getTechnik } = require('../controllers/products');
const { getBuecher } = require('../controllers/products');

const router = express.Router();

router.get('/products/technik', getTechnik);
router.get('/products/buecher', getBuecher);

module.exports = router;
