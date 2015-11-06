// Dependencies

var express = require('express');
var router = express.Router();

// Models
var product = require('../models/product');

// Routes
product.methods(['get', 'put', 'post', 'delete']);
product.register( router, '/products');
  

// Return router

module.exports = router;
