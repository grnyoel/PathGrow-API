const pool = require('../config/postgres');

// Mendapatkan semua user
const getAllUsers = async () => {
  const result = await pool.query('SELECT id, email, username FROM users');
  return result.rows;
};

// Mendapatkan user berdasarkan ID
const getUserById = async (id) => {
  const result = await pool.query('SELECT id, email, username FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

// Membuat user baru
const createUser = async (email, username, password) => {
  const result = await pool.query(
    'INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING id',
    [email, username, password]
  );
  return result.rows[0];
};

// Memperbarui user berdasarkan ID
const updateUserById = async (id, updates) => {
  const { username, password } = updates;
  const fields = [];
  const values = [];
  let i = 1;

  if (username) {
    fields.push(`username = $${i}`);
    values.push(username);
    i++;
  }
  if (password) {
    fields.push(`password = $${i}`);
    values.push(password);
    i++;
  }

  values.push(id);
  const query = `UPDATE users SET ${fields.join(', ')} WHERE id = $${i}`;
  await pool.query(query, values);
};

// Menghapus user berdasarkan ID
const deleteUserById = async (id) => {
  await pool.query('DELETE FROM users WHERE id = $1', [id]);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
