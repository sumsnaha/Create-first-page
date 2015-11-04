var http = require('http');
var s = http.createServer(function(req,res)
{res.writeHead(200, { 'content=type' : 'text/plain' });
    res.end("Hello World\n");

}).listen(3000, 'preview.i9jupc6ek10dx6r0sweafqimhsvpldi320qg47b76bqehfr.box.codeanywhere.com');
console.log('sever running at http://preview.i9jupc6ek10dx6r0sweafqimhsvpldi320qg47b76bqehfr.box.codeanywhere.com:3000/');
