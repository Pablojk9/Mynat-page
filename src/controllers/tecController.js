const Tec = require('../models/tecModel');
const bcrypt = require('bcrypt');

exports.createTec = (req, res) => {
  const newTec = req.body;
  Tec.create(newTec, (err, result) => {
      if (err) {
          console.error('Error al crear el técnico:', err);
          res.status(500).send('Error al crear el técnico: ' + err.message);
      } else {
          res.status(201).json({ rut: newTec.rut, ...newTec });
      }
  });
}

exports.getTecs = (req, res) => {
  Tec.getAll((err, tecs) => {
    if (err) {
      console.error('Error al obtener los técnicos:', err);
      res.status(500).send('Error al obtener los técnicos: ' + err.message);
    } else {
      res.status(200).json(tecs);
    }
  });
};

exports.getAdmins = (req, res) => {
  Tec.getAdmins((err, tecs) => {
    if (err) {
      console.error('Error al obtener los administradores:', err);
      res.status(500).send('Error al obtener los administradores: ' + err.message);
    } else {
      res.status(200).json(tecs);
    }
  });
};

exports.updateTecByRut = (req, res) => {
  const { rut } = req.params;
  const tecData = req.body;

  Tec.updateByRut(rut, tecData, (err, result) => {
    if (err) {
      return res.status(500).send('Error al actualizar el técnico');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Técnico no encontrado');
    }
    res.send('Técnico actualizado exitosamente');
  });
};

exports.updateAdminStatusByRut = (req, res) => {
  const { rut } = req.params;
  const { es_admin } = req.body;

  Tec.updateAdminStatusByRut(rut, es_admin, (err, result) => {
    if (err) {
      return res.status(500).send('Error al actualizar el estado de administrador');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Técnico no encontrado');
    }
    res.send('Estado de administrador actualizado exitosamente');
  });
};

exports.deleteTec = (req, res) => {
  const { rut } = req.params;
  Tec.delete(rut, (err, result) => {
    if (err) {
      console.error('Error al eliminar el técnico:', err);
      res.status(500).send('Error al eliminar el técnico: ' + err.message);
    } else if (result.affectedRows === 0) {
      res.status(404).send('Técnico no encontrado');
    } else {
      res.status(200).send('Técnico eliminado exitosamente');
    }
  });
};