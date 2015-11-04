var express = require('express');
var app = express();
var fs = require("fs");

app.get('/index.json', function(req, res){
	fs.readFile( __dirname + "/" + "index.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

	
  var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);

});

