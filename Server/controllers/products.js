const asyncHandler = require('express-async-handler');
const model = require('../model/products');

const getTechnik = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getTechnik());
});

const getBuecher = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getBuecher());
});

const getSport = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getSport());
});

const getHaushalt = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getHaushalt());
});

module.exports = { getTechnik, getBuecher, getSport, getHaushalt };
