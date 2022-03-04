const express = require('express');
const { getTechnik } = require('../controllers/products');
const { getBuecher } = require('../controllers/products');
const { getSport } = require('../controllers/products');
const { getHaushalt } = require('../controllers/products');

const router = express.Router();

router.get('/products/technik', getTechnik);
router.get('/products/buecher', getBuecher);
router.get('/products/sport', getSport);
router.get('/products/haushalt', getHaushalt);

module.exports = router;
