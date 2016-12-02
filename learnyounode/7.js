var http = require('http') ;

http.get(process.argv[2] , function (resp ){
    // response.setEncoding('utf8') ; //optional
    resp.on( 'data' , function (data) {
        console.log( data.toString()) ;
    });
    resp.on( 'error' , console.error);
}).on('error' , console.error) ;