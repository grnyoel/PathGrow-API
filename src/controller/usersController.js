const usersModel = require('../model/usersModel')

const getAllUsers = async (req, res) => {
  try {
    const [data] = await usersModel.getAllUsers();
  
    res.json({
      message: 'GET All Users success',
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server ERROR',
      serverMessage: error,
    })
  }
}

const createNewUser = async (req, res) => {
  const { body } = req;

  if (!body.name || !body.username || !body.email || !body.password) {
    return res.status(400).json({
      message: 'Please fill in all fields correctly',
      data: null,
    })
  }

  try {
    await usersModel.createNewUser(body);
    res.status(201).json({
      message: 'CREATE New User success',
      data: body
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server ERROR',
      serverMessage: error,
    })
  }
}

const updateUser = async (req, res) => {
  const { userID } = req.params;
  const { body } = req;
  try {
    await usersModel.updateUser(body, userID);
    res.json({
      message: 'UPDATE User success',
      data: {
        id: userID,
        ...body
      }
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server ERROR',
      serverMessage: error,
    })
  }
}

const deleteUser = async (req, res) => {
  const { userID } = req.params;
  try {
    await usersModel.deleteUser(userID);
    res.json({
      message: 'DELETE User success',
      data: null
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server ERROR',
      serverMessage: error,
    })
  }
}

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
}