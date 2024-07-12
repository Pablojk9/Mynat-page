const db = require('./db');

const Product = {};

Product.create = (productData, callback) => {
  const { nombre_producto, descripcion_producto, precio_original_producto, oferta_producto, precio_oferta_producto } = productData;
  const sql = 'INSERT INTO producto (nombre_producto, descripcion_producto, precio_original_producto, oferta_producto, precio_oferta_producto, stock) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [nombre_producto, descripcion_producto, precio_original_producto, oferta_producto, precio_oferta_producto, stock], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

Product.getAll = (callback) => {
  const sql = 'SELECT * FROM producto';
  db.query(sql, (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results);
  });
};

Product.getById = (productId, callback) => {
  const sql = 'SELECT * FROM producto WHERE id_producto = ?';
  db.query(sql, [productId], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result[0]);
  });
};

Product.updateById = (productId, productData, callback) => {
  const { nombre_producto, descripcion_producto, precio_original_producto, oferta_producto, precio_oferta_producto, stock } = productData;
  const sql = 'UPDATE producto SET nombre_producto = ?, descripcion_producto = ?, precio_original_producto = ?, oferta_producto = ?, precio_oferta_producto = ?, stock = ? WHERE id_producto = ?';
  db.query(sql, [nombre_producto, descripcion_producto, precio_original_producto, oferta_producto, precio_oferta_producto, stock, productId], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

Product.deleteById = (productId, callback) => {
  const sql = 'DELETE FROM producto WHERE id_producto = ?';
  db.query(sql, [productId], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = Product;