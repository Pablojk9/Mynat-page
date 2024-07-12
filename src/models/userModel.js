const db = require('./db');
const bcrypt = require('bcrypt');

const User = {};

User.create = (userData, callback) => {
  bcrypt.hash(userData.contraseña, 10, (err, hash) => {
    if (err) {
        return callback(err);
    }
  const sql = 'INSERT INTO users (rut_user, nombre_user, apellidos_user, telefono_user, correo_user, contraseña_user) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [userData.rut, userData.nombre, userData.apellidos, userData.telefono, userData.correo, hash], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
});
};

User.getAll = (callback) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results);
  });
};

User.updateByRut = (rut, userData, callback) => {
  const sql = 'UPDATE users SET nombre_user = ?, apellidos_user = ?, telefono_user = ?, correo_user = ? WHERE rut_user = ?';
  db.query(sql, [userData.nombre, userData.apellidos, userData.telefono, userData.correo, rut], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

User.delete = (rut, callback) => {
  const sql = 'DELETE FROM users WHERE rut_user = ?';
  db.query(sql, [rut], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = User;