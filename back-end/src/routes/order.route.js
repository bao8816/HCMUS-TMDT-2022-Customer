const express = require('express');
const router = express.Router();
const orderController = require('../app/controllers/order.controller');

//READ
router.get('/:id', orderController.getOrderById);
router.get('/', orderController.getOrders);

//CREATE
router.post('/', orderController.createOrder);

//UPDATE
//cancel order
router.put('/:id/cancel', orderController.cancelOrder);


module.exports = router;
