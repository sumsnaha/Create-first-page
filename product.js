// Dependencies

var express = require('express');
var router = express.Router();

// Schema
var productSchema = new mongoose.schema({
name: String,
sku: String,
price: Number

});

// Models

var product = require('../models/product');

// Routes

product.methods(['get', 'put', 'post', 'delete']);

product.register( router, '/products');

// Return router

module.exports = router;
