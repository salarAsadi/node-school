var fs = require('fs') ;


fs.readdir(process.argv[2],function (err , list) {
    if (err)
        throw err ;

    list = list.filter(function (data) {
        if (data.indexOf("." + process.argv[3])>= 0 )
            return true ;
        return false ;
    }) ;
    list.forEach(function (element) {
        console.log(element) ;
    })
});
