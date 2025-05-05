const pool = require('../config/db');

exports.addRating = async (req, res) => {
  const { store_id, rating, comment } = req.body;
  const user_id = req.user.userId;
  await pool.query(
    'INSERT INTO ratings (user_id, store_id, rating, comment, created_at) VALUES ($1, $2, $3, $4, NOW())',
    [user_id, store_id, rating, comment]
  );
  res.status(201).json({ message: 'Rating added' });
};

exports.getUserRatings = async (req, res) => {
  const user_id = req.user.userId;
  const result = await pool.query(
    'SELECT r.*, s.name AS store_name FROM ratings r JOIN stores s ON r.store_id = s.id WHERE user_id = $1',
    [user_id]
  );
  res.json(result.rows);
};

exports.getRatingsByStore = async (req, res) => {
  const { storeId } = req.params;
  const result = await pool.query(
    'SELECT r.*, u.name AS user_name FROM ratings r JOIN users u ON r.user_id = u.id WHERE store_id = $1',
    [storeId]
  );
  res.json(result.rows);
};
