const dbPool = require('../config/mysql')

const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM users';
  
  return dbPool.execute(SQLQuery);
}

const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO users (name, username, email, password)
                    VALUES ('${body.name}', '${body.username}', '${body.email}', '${body.password}')`;
  return dbPool.execute(SQLQuery);
}

const updateUser = (body, userID) => {
  const SQLQuery = `UPDATE users 
                    SET name='${body.name}', username='${body.username}'
                    WHERE id=${userID}`;
  return dbPool.execute(SQLQuery);
}

const deleteUser = (userID) => {
  const SQLQuery = `DELETE FROM users WHERE id=${userID}`;

  return dbPool.execute(SQLQuery);
}

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
}