const Product = require('../models/productModel');

exports.createProduct = (req, res) => {
  const newProduct = req.body;
  Product.create(newProduct, (err, result) => {
    if (err) {
      console.error('Error al crear el producto:', err);
      res.status(500).send('Error al crear el producto: ' + err.message);
    } else {
      res.status(201).json(result);
    }
  });
};

exports.getAllProducts = (req, res) => {
  Product.getAll((err, products) => {
    if (err) {
      console.error('Error al obtener los productos:', err);
      res.status(500).send('Error al obtener los productos: ' + err.message);
    } else {
      res.status(200).json(products);
    }
  });
};

exports.getProductById = (req, res) => {
  const productId = req.params.id;
  Product.getById(productId, (err, product) => {
    if (err) {
      console.error('Error al obtener el producto:', err);
      res.status(500).send('Error al obtener el producto: ' + err.message);
    } else if (!product) {
      res.status(404).send('Producto no encontrado');
    } else {
      res.status(200).json(product);
    }
  });
};

exports.updateProductById = (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;
  Product.updateById(productId, updatedProduct, (err, result) => {
    if (err) {
      console.error('Error al actualizar el producto:', err);
      res.status(500).send('Error al actualizar el producto: ' + err.message);
    } else if (result.affectedRows === 0) {
      res.status(404).send('Producto no encontrado');
    } else {
      res.status(200).send('Producto actualizado exitosamente');
    }
  });
};

exports.deleteProductById = (req, res) => {
  const productId = req.params.id;
  Product.deleteById(productId, (err, result) => {
    if (err) {
      console.error('Error al eliminar el producto:', err);
      res.status(500).send('Error al eliminar el producto: ' + err.message);
    } else if (result.affectedRows === 0) {
      res.status(404).send('Producto no encontrado');
    } else {
      res.status(200).send('Producto eliminado exitosamente');
    }
  });
};