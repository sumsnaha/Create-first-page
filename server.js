var express = require('express');
var app = express();
app.get('/', function(req, res){
	res.send('Hello Sumsun');
});

app.listen(3000);
console.log('Hello Sumsun, your website is workin on port 3000');