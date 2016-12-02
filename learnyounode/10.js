var net = require('net');
var moment = require('moment') ;



//Every connection received by your server
//triggers a call to the connectionListener.
net.createServer(connectionListener)
    .listen(process.argv[2]);//createServer()  returns an instance of your server and we can call listen() on it

function connectionListener(socket) {
    // socket.end(moment().format("YYYY-MM-DD HH:mm:ss")) ;//mysql timestamp format
    socket.end(moment().format("YYYY-MM-DD HH:mm") + "\n") ;
}


/*
this is the official solution .
var net = require('net')

function zeroFill (i) {
    return (i < 10 ? '0' : '') + i
}

function now () {
    var d = new Date()
    return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
*/