const express = require('express');
const router = express.Router();
const brandController = require('../app/controllers/brand.controller');

//READ
router.get('/:id', brandController.getBrandById);
router.get('/', brandController.getBrands);

module.exports = router;
