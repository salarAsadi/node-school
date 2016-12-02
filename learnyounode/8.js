//approach one

var http = require('http') ;
http.get(process.argv[2] , function (resp) {
    var respContent = '' ;
    resp.on('data' , function (data) {
        respContent += data.toString() ;
    }) ;
    resp.on('end' ,  function() {
        console.log(respContent.length) ;
        console.log(respContent) ;
    }) ;
}).on('error' , console.error) ;


//approach 2
/*

var http = require('http') ;
var bl = require('bl') ;

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err)
        }
        data = data.toString() ;
        console.log(data.length) ;
        console.log(data) ;
    }))
}) ;
 */