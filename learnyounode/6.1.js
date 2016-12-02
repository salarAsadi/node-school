var fs = require('fs') ;


function myAsyncFunc( directoryName  , extension , cb) {
    fs.readdir(directoryName , function (err ,list) {
        if (err)
            return cb(err) ;//return error to cb

        list = list.filter(function (data) {
            return data.indexOf("." + extension)>= 0 ;
        }) ;
        return cb(null , list) ;
    }) ;

}

module.exports = myAsyncFunc ;
