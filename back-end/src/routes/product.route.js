const express = require('express');
const router = express.Router();
const productController = require('../app/controllers/product.controller');

//READ
router.get('/brand/:brand', productController.getProductByBrand);
router.get('/category/:category', productController.getProductByCategory);
router.get('/:id', productController.getProductById);
router.get('/', productController.getProducts);

module.exports = router;
