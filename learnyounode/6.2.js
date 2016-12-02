var mymodule = require('./6.1')(
    process.argv[2] , process.argv[3] , function (err , data) {
        if (err)
            throw  err ;
        data.forEach(function (element) {
            console.log(element) ;
        }) ;
    }
) ;
