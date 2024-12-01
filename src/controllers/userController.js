const bcrypt = require('bcrypt');
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require('../models/userModel');

// Mendapatkan semua user
exports.getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mendapatkan user berdasarkan ID
exports.getUser = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Membuat user baru
exports.createUser = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser(email, username, hashedPassword);
    res.status(201).json({ message: 'User created', userId: user.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Memperbarui user berdasarkan ID
exports.updateUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const updates = {};
    if (username) updates.username = username;
    if (password) updates.password = await bcrypt.hash(password, 10);

    await updateUserById(req.params.id, updates);
    res.json({ message: 'User updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Menghapus user berdasarkan ID
exports.deleteUser = async (req, res) => {
  try {
    await deleteUserById(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
