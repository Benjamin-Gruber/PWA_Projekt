const asyncHandler = require('express-async-handler');
const model = require('../model/products');

const getTechnik = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getTechnik());
});

const getBuecher = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getBuecher());
});

module.exports = { getTechnik, getBuecher };
