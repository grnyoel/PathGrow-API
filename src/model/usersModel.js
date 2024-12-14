const dbPool = require('../config/mysql');

const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM users';
  return dbPool.execute(SQLQuery);
};

const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO users (name, username, email, password)
                    VALUES (?, ?, ?, ?)`;
  return dbPool.execute(SQLQuery, [body.name, body.username, body.email, body.password]);
};

const findUserByEmailOrUsername = (emailOrUsername) => {
  const SQLQuery = `SELECT * FROM users WHERE email = ? OR username = ?`;
  return dbPool.execute(SQLQuery, [emailOrUsername, emailOrUsername]);
};

const updateUser = (body, userID) => {
  const SQLQuery = `UPDATE users SET name = ?, username = ? WHERE id = ?`;
  return dbPool.execute(SQLQuery, [body.name, body.username, userID]);
};

const deleteUser = (userID) => {
  const SQLQuery = `DELETE FROM users WHERE id = ?`;
  return dbPool.execute(SQLQuery, [userID]);
};

module.exports = {
  getAllUsers,
  createNewUser,
  findUserByEmailOrUsername,
  updateUser,
  deleteUser,
};
