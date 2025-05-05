const pool = require('../config/db');

exports.getAllUsers = async (req, res) => {
  const result = await pool.query('SELECT id, name, email, role, address FROM users');
  res.json(result.rows);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM users WHERE id = $1', [id]);
  res.json({ message: 'User deleted' });
};

exports.getAllRatings = async (req, res) => {
  const result = await pool.query(`
    SELECT r.id, r.rating, r.comment, r.created_at, u.name AS user, s.name AS store
    FROM ratings r
    JOIN users u ON r.user_id = u.id
    JOIN stores s ON r.store_id = s.id
  `);
  res.json(result.rows);
};

exports.getAllStores = async (req, res) => {
  const result = await pool.query('SELECT * FROM stores');
  res.json(result.rows);
};
