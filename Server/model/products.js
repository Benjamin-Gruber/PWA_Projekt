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

async function delProduct(id) {
  const { rows } = await db.query('DELETE FROM products WHERE id=$1', [id]);
  return rows;
}

const postProduct = async ({ wohnort, owner, image, price, category, product }) => {
  const vorhanden = await db.query('SELECT max(id) from products');
  const maxId = vorhanden.rows[0].max + 1;
  const { rows } = await db.query(
    `INSERT INTO products (wohnort, id, owner, image, price, category, product) 
    VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [wohnort, maxId, owner, image, price, category, product],
  );
  return rows;
};

module.exports = {
  getTechnik,
  getBuecher,
  getSport,
  getHaushalt,
  delProduct,
  postProduct,
};
