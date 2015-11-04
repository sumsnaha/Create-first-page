var express = require('express');
var app = express();
app.get('/', function(req, res){
	res.send('Hello Sumsun, your website is working');
});

var server = app.listen(8081, function () {

  var host = server.address('http://preview.i9jupc6ek10dx6r0sweafqimhsvpldi320qg47b76bqehfr.box.codeanywhere.com').address;
  var port = server.address('http://preview.i9jupc6ek10dx6r0sweafqimhsvpldi320qg47b76bqehfr.box.codeanywhere.com').port;

  console.log("Example app listening at http://preview.i9jupc6ek10dx6r0sweafqimhsvpldi320qg47b76bqehfr.box.codeanywhere.com:8081/", host, port);

});

