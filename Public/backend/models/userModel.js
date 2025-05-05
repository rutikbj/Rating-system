const pool = require('../config/db');

const createUser = async (user) => {
  const { name, email, password, address, role_id } = user;
  const result = await pool.query(
    'INSERT INTO users (name, email, password, address, role_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [name, email, password, address, role_id]
  );
  return result.rows[0];
};

const getUserByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
};

const getUserById = async (id) => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
};
