const express = require('express');

const userController = require('../controller/usersController');
const router = express.Router();

router.get('/', userController.getAllUsers);
router.patch('/:userID', userController.updateUser);
router.delete('/:userID', userController.deleteUser);

module.exports = router;