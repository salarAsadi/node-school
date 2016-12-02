var fs = require('fs') ;
var http = require('http') ;
var server = http.createServer() ;//can accept a callback for new request event. 
server.listen(process.argv[2]) ;

//below code could be added directly to createServer
server.on('request' , function (req , res) {
    fs.createReadStream(process.argv[3] ).pipe() ;
}) ;