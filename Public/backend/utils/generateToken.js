const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'secret';

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    SECRET,
    { expiresIn: '2h' }
  );
};

module.exports = generateToken;