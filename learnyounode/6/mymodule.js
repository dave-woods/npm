var fs = require("fs");

module.exports = function(dir, ext, callback)
{
    return fs.readdir(dir, function(err, list){
        if (err)
            return callback(err);
        else
        {
            var arr = [];
            for (var i = 0; i < list.length; i++)
            {
                if (list[i].endsWith("." + ext))
                    arr.push(list[i]);
            }
            return callback(null, arr);
        }
    });
}



// official solution

/*
     var fs = require('fs')  
     var path = require('path')  
       
     module.exports = function (dir, filterStr, callback) {  
       
       fs.readdir(dir, function (err, list) {  
         if (err)  
           return callback(err)  
       
         list = list.filter(function (file) {  
           return path.extname(file) === '.' + filterStr  
         })  
       
         callback(null, list)  
       })  
     }
*/