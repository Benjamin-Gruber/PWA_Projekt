const db = require('../db');

async function getTechnik() {
  const { rows } = await db.query("SELECT * FROM products WHERE category='Technik'");
  return rows;
}

async function getBuecher() {
  const { rows } = await db.query("SELECT * FROM products WHERE category='Buecher'");
  return rows;
}

module.exports = { getTechnik, getBuecher };
