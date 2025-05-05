import axios from 'axios';

export const loginUser = async (credentials) => {
  const res = await axios.post('/api/auth/login', credentials);
  localStorage.setItem('token', res.data.token);
};

export const registerUser = async (userData) => {
  await axios.post('/api/auth/register', userData);
};
