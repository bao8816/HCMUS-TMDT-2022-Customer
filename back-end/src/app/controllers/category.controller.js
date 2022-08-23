const Category = require('../models/category.model');
const { multipleMongooseToObject } = require('../../utils/mongoose');
const { mongooseToObject } = require('../../utils/mongoose');

class CategoryController {
    getCategories(req, res) {
        if (req.isAuthenticated()) {
            Category.find({})
                .then(categories => {
                    res.json(multipleMongooseToObject(categories));
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
    
    getCategoryById(req, res) {
        if (req.isAuthenticated()) {
            Category.findById(req.params.id)
                .then(category => {
                    res.json(mongooseToObject(category));
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

module.exports = new CategoryController();
