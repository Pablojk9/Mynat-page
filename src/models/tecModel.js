const db = require('./db');
const bcrypt = require('bcrypt');

const Tec = {};

Tec.create = (tecData, callback) => {
  bcrypt.hash(tecData.contraseña, 10, (err, hash) => {
      if (err) {
          return callback(err);
      }
      const sql = 'INSERT INTO tecnico (rut_tec, nombre_tec, apellidos_tec, telefono_tec, correo_tec, contraseña_tec, es_admin) VALUES (?, ?, ?, ?, ?, ?, ?)';
      db.query(sql, [tecData.rut, tecData.nombre, tecData.apellidos, tecData.telefono, tecData.correo, hash, tecData.admin], (err, result) => {
          if (err) {
              return callback(err);
          }
          callback(null, result);
      });
  });
};

Tec.getAll = (callback) => {
  const sql = 'SELECT * FROM tecnico WHERE es_admin = 0';
  db.query(sql, (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results);
  });
};

Tec.getAdmins = (callback) => {
  const sql = 'SELECT * FROM tecnico WHERE es_admin = 1';
  db.query(sql, (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results);
  });
};

Tec.updateByRut = (rut, tecData, callback) => {
  const sql = 'UPDATE tecnico SET nombre_tec = ?, apellidos_tec = ?, telefono_tec = ?, correo_tec = ? WHERE rut_tec = ?';
  db.query(sql, [tecData.nombre, tecData.apellidos, tecData.telefono, tecData.correo, rut], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

Tec.updateAdminStatusByRut = (rut, es_admin, callback) => {
  const sql = 'UPDATE tecnico SET es_admin = ? WHERE rut_tec = ?';
  db.query(sql, [es_admin, rut], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

Tec.delete = (rut, callback) => {
  const sql = 'DELETE FROM tecnico WHERE rut_tec = ?';
  db.query(sql, [rut], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = Tec;