const express = require('express');
const {
  getTechnik,
  getBuecher,
  getSport,
  getHaushalt,
  delProduct,
  postProduct,
} = require('../controllers/products');

const router = express.Router();

router.get('/products/technik', getTechnik);
router.get('/products/buecher', getBuecher);
router.get('/products/sport', getSport);
router.get('/products/haushalt', getHaushalt);
router.delete('/products/:id', delProduct);
router.post('/products', postProduct);

module.exports = router;
