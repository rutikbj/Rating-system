const pool = require('../config/db');

const addRating = async ({ user_id, store_id, rating }) => {
  const result = await pool.query(
    'INSERT INTO ratings (user_id, store_id, rating) VALUES ($1, $2, $3) ON CONFLICT (user_id, store_id) DO UPDATE SET rating = EXCLUDED.rating RETURNING *',
    [user_id, store_id, rating]
  );
  return result.rows[0];
};

const getRatingsByStoreId = async (store_id) => {
  const result = await pool.query('SELECT * FROM ratings WHERE store_id = $1', [store_id]);
  return result.rows;
};

const getAverageRating = async (store_id) => {
  const result = await pool.query('SELECT AVG(rating) FROM ratings WHERE store_id = $1', [store_id]);
  return result.rows[0].avg;
};

module.exports = {
  addRating,
  getRatingsByStoreId,
  getAverageRating,
};
