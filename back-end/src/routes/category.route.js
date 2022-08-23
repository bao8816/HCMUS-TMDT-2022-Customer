const express = require('express');
const router = express.Router();
const categoryController = require('../app/controllers/category.controller');

//READ
router.get('/:id', categoryController.getCategoryById);
router.get('/', categoryController.getCategories);

module.exports = router;
