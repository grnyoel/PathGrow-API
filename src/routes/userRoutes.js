const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

// Routes untuk user
router.get('/', getUsers);            // GET semua user
router.get('/:id', getUser);          // GET user berdasarkan ID
router.post('/', createUser);         // POST membuat user baru
router.put('/:id', updateUser);       // PUT memperbarui user
router.delete('/:id', deleteUser);    // DELETE menghapus user

module.exports = router;
