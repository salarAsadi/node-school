var http = require('http') ;

var result = [
    {'url' : process.argv[2] , 'body' : '' , 'completed': false},
    {'url' : process.argv[3] , 'body' : '' , 'completed': false},
    {'url' : process.argv[4] , 'body' : '' , 'completed': false}
] ;


http.get(result[0].url , function (resp) {
    resp.on('data' , function (chunk) {
        result[0].body += chunk.toString() ;
    }) ;
    resp.on('end' , function () {
       result[0].completed= true ;
        if (result[0].completed && result[1].completed && result[2].completed){
            console.log(result[0].body) ;
            console.log(result[1].body) ;
            console.log(result[2].body) ;
        }
    });
}) ;

http.get(result[1].url , function (resp) {
    resp.on('data' , function (chunk) {
        result[1].body += chunk.toString() ;
    }) ;
    resp.on('end' , function () {
        result[1].completed= true ;
        if (result[0].completed && result[1].completed && result[2].completed){
            console.log(result[0].body) ;
            console.log(result[1].body) ;
            console.log(result[2].body) ;
        }
    });
}) ;

http.get(result[2].url , function (resp) {
    resp.on('data' , function (chunk) {
        result[2].body += chunk.toString() ;
    }) ;
    resp.on('end' , function () {
        result[2].completed= true ;
        if (result[0].completed && result[1].completed && result[2].completed){
            console.log(result[0].body) ;
            console.log(result[1].body) ;
            console.log(result[2].body) ;
        }
    });
}) ;


// the below code is the same as the above solution but
// it does not work because all the listeners are defined
//in the foreach iterations and with each iteration they are destroyed.
/*
result.forEach(function (data) {
    http.get(data.url , function (resp) {
        resp.on('data' , function (chunk) {
            data.body += chunk.toString() ;
        }) ;
        resp.on('end' , function () {
            resp.completed = true ;
            if (result[0].completed && result[1].completed && result[2].completed){
                console.log(result[0].body) ;
                console.log(result[1].body) ;
                console.log(result[2].body) ;
            }
        })
    }).on('error' , console.error) ;
}) ;
*/

/*
solution introduced by nodeschool
 var http = require('http')
 var bl = require('bl')
 var results = []
 var count = 0

 function printResults () {
 for (var i = 0; i < 3; i++) {
 console.log(results[i])
 }
 }

 function httpGet (index) {
 http.get(process.argv[2 + index], function (response) {
 response.pipe(bl(function (err, data) {
 if (err) {
 return console.error(err)
 }

 results[index] = data.toString()
 count++

 if (count === 3) {
 printResults()
 }
 }))
 })
 }

 for (var i = 0; i < 3; i++) {
 httpGet(i)
 }

*/