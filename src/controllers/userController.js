const User = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.createUser = (req, res) => {
  const newUser = req.body;
  User.create(newUser, (err, result) => {
    if (err) {
      console.error('Error al crear el usuario:', err);
      res.status(500).send('Error al crear el usuario: ' + err.message);
    } else {
      res.status(201).json({ rut: newUser.rut, ...newUser });
    }
  });
};

exports.getUsers = (req, res) => {
  User.getAll((err, users) => {
    if (err) {
      console.error('Error al obtener los usuarios:', err);
      res.status(500).send('Error al obtener los usuarios: ' + err.message);
    } else {
      res.status(200).json(users);
    }
  });
};

exports.updateUserByRut = (req, res) => {
  const { rut } = req.params;
  const userData = req.body;

  User.updateByRut(rut, userData, (err, result) => {
    if (err) {
      return res.status(500).send('Error al actualizar el usuario');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Usuario no encontrado');
    }
    res.send('Usuario actualizado exitosamente');
  });
};

exports.deleteUser = (req, res) => {
  const { rut } = req.params;
  User.delete(rut, (err, result) => {
    if (err) {
      console.error('Error al eliminar el usuario:', err);
      res.status(500).send('Error al eliminar el usuario: ' + err.message);
    } else if (result.affectedRows === 0) {
      res.status(404).send('Usuario no encontrado');
    } else {
      res.status(200).send('Usuario eliminado exitosamente');
    }
  });
};