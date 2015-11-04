var express = require('express');
var router = express.Router();
var app = express();
var db = {};

/* retrieve */
router.get('/: name', function(req, res, next){
	str = db[req.params.name] || {"name": "Sumsun", "message": "Hello Sumsun"};
	res.json(string);
});

module.exports = router;

var server = router.get(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

console.log("Example router running at http://%s:%s", host, port);
});



