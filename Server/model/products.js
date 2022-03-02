const db = require('../db');

async function getProducts(cat) {
  const { rows } = await db.query('SELECT * FROM products WHERE category = $1', [cat]);
  return rows;
}

module.exports = { getProducts };
