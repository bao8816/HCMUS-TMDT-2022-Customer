const config = require('../../config/env_config');
const paypal = require('paypal-rest-sdk');

// PayPal config
paypal.configure({
    mode: 'sandbox', //sandbox or live
    client_id: config.PAYPAL_CLIENT_ID,
    client_secret: config.PAYPAL_CLIENT_SECRET
});

class PaymentController {
    createPayment(req, res) {
        const order = req.body;

        const items = order.products.map(product => {
            return {
                name: product.product_id.name,
                quantity: product.quantity,
                price: product.product_id.price,
                currency: 'USD'
            };
        }).reduce((acc, cur) => {
            return acc.concat(cur);
        } , []);

        const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": config.CUSTOMER_BASE_URL + "/success",
                "cancel_url": config.CUSTOMER_BASE_URL + "/cancel"
            },
            "transactions": [{
                "item_list": {
                    "items": items
                },
                "amount": {
                    "currency": "USD",
                    "total": order.total
                },
                "description": "This is the payment description."
            }]
        };
        
        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
                for (let i = 0; i < payment.links.length; i++) {
                    if (payment.links[i].rel === 'approval_url') {
                        res.redirect(payment.links[i].href);
                    }
                }
            }
        });
    }

    successPayment(req, res) {
        const payerId = req.query.PayerID;
        const paymentId = req.query.paymentId;
        const order = req.body;

        const execute_payment_json = {
            "payer_id": payerId,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": order.total
                }
            }]
        }

        paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
                res.json({
                    status: 'success',
                    payment: payment
                })
            }
        });
    }

    cancelPayment(req, res) {
        res.json({
            status: 'cancel'
        })
    }
}

module.exports = new PaymentController();
