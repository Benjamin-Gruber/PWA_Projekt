const db = require('../db');

async function getTechnik() {
  const { rows } = await db.query("SELECT * FROM products WHERE category='Technik'");
  return rows;
}

async function getBuecher() {
  const { rows } = await db.query("SELECT * FROM products WHERE category='Buecher'");
  return rows;
}

async function getSport() {
  const { rows } = await db.query("SELECT * FROM products WHERE category='Sport'");
  return rows;
}

async function getHaushalt() {
  const { rows } = await db.query("SELECT * FROM products WHERE category='Haushalt'");
  return rows;
}

module.exports = { getTechnik, getBuecher, getSport, getHaushalt };
