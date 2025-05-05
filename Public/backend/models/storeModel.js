const pool = require('../config/db');

const createStore = async (store) => {
  const { name, email, address, owner_id } = store;
  const result = await pool.query(
    'INSERT INTO stores (name, email, address, owner_id) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, email, address, owner_id]
  );
  return result.rows[0];
};

const getAllStores = async () => {
  const result = await pool.query('SELECT * FROM stores');
  return result.rows;
};

const getStoreById = async (id) => {
  const result = await pool.query('SELECT * FROM stores WHERE id = $1', [id]);
  return result.rows[0];
};

module.exports = {
  createStore,
  getAllStores,
  getStoreById,
};
