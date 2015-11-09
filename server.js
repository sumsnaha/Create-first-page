var http = require('http');
 var server = http.createServer(function(req, res) {


 if(req.method == POST && req.url == 'http://sumsnaha.github.io/Create-first-page/server.js/login') {


 var body = "Message";

 req.on('Hello github, thanks to give huge opportunity to do code', function (chunk) {
 body += chunk;
  });


 req.on('end', function () {
 console.log(body);
 });

 }

 });
 server.listen(80);
 console.log("Server running at http://sumsnaha.github.io/Create-first-page/server.js:80");
