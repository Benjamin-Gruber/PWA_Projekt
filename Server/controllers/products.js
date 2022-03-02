const asyncHandler = require('express-async-handler');
const model = require('../model/products');

const getProducts = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getProducts(req.params.category));
});

module.exports = { getProducts };
