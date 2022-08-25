const Product = require('../models/product.model');
const { multipleMongooseToObject } = require('../../utils/mongoose');
const { mongooseToObject } = require('../../utils/mongoose');


class ProductController {
    getProducts(req, res) {
        if (req.isAuthenticated()) {
            Product.find({})
                .then(products => {
                    res.json(multipleMongooseToObject(products));
                }).catch(err => {
                    res.json({
                        message: err.message
                    });
                })
        } else {
            res.json({
                message: 'You are not authorized'
            });
        }
    }

    getProductById(req, res) {
        if (req.isAuthenticated()) {
            Product.findById(req.params.id)
                .then(product => {
                    res.json(mongooseToObject(product));
                }).catch(err => {
                    res.json({
                        message: err.message
                    });
                })
        } else {
            res.json({
                message: 'You are not authorized'
            });
        };
    }

    getProductByBrand(req, res) {
        if (req.isAuthenticated()) {
            Product.find({ brand: req.params.brand })
                .then(product => {
                    res.json(multipleMongooseToObject(product));
                }).catch(err => {
                    res.json({
                        message: err.message
                    });
                })
        } else {
            res.json({
                message: 'You are not authorized'
            });
        };
    }

    getProductByCategory(req, res) {
        if (req.isAuthenticated()) {
            Product.find({ category: req.params.category })
                .then(product => {
                    res.json(multipleMongooseToObject(product));
                }).catch(err => {
                    res.json({
                        message: err.message
                    });
                })
        } else {
            res.json({
                message: 'You are not authorized'
            });
        };
    }
}

module.exports = new ProductController();
