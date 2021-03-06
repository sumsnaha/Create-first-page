// Dependencies

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB

mongoose.connect('mongodb://localhost/REST-test');

// Express

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Routes

app.use('/api', require('./routes/api'));


// Start server

app.listen(3000);
console.log('API is running on http://sumsnaha.github.io/Create-first-page:3000/');
