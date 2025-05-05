const pool = require('../config/db');

exports.getAllStores = async (req, res) => {
  const result = await pool.query('SELECT * FROM stores');
  res.json(result.rows);
};

exports.getStoreById = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM stores WHERE id = $1', [id]);
  if (result.rows.length === 0) return res.status(404).json({ error: 'Store not found' });
  res.json(result.rows[0]);
};

exports.addStore = async (req, res) => {
  const { name, address } = req.body;
  await pool.query('INSERT INTO stores (name, address, created_at) VALUES ($1, $2, NOW())', [name, address]);
  res.status(201).json({ message: 'Store added' });
};

exports.deleteStore = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM stores WHERE id = $1', [id]);
  res.json({ message: 'Store deleted' });
};
