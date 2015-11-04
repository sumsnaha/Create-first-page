var express = require('express');
var app = express();
app.get('/', function(req, res){
	res.send('Hello Sumsun, your website is working');
});

app.listen(3000);
console.log('Hello Sumsun, your website is workin on port 3000');