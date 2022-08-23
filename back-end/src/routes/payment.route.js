const express = require('express');
const router = express.Router();
const paymentController = require('../app/controllers/payment.controller');

router.post('/', paymentController.createPayment);
router.get('/success', paymentController.successPayment);
router.get('/cancel', paymentController.cancelPayment);

module.exports = router;
