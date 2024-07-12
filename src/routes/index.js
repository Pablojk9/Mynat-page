const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const tecController = require('../controllers/tecController');

router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.put('/users/:rut', userController.updateUserByRut);
router.delete('/users/:rut', userController.deleteUser);

router.post('/tecs', tecController.createTec);
router.get('/tecs', tecController.getTecs);
router.put('/tecs/:rut', tecController.updateTecByRut);
router.delete('/tecs/:rut', tecController.deleteTec);

router.put('/tecs/:rut/admin-status', tecController.updateAdminStatusByRut);
router.get('/admins', tecController.getAdmins);


router.post('/productos', productController.createProduct);
router.get('/productos', productController.getAllProducts);
router.get('/productos/:id', productController.getProductById);
router.put('/productos/:id', productController.updateProductById);
router.delete('/productos/:id', productController.deleteProductById);

module.exports = router;