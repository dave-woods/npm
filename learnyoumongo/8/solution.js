/*
Here we will learn how to count the number of documents that
meet certain criteria.

Use the parrots collection to count all documents where age
is greater than the first argument passed to your script.

Using console.log, print the number to stdout.
*/

var url = "mongodb://localhost:27017/learnyoumongo";
var mongo = require('mongodb').MongoClient;
mongo.connect(url, function(err, db) {
    if(!err)
    {
        db.collection("parrots").count({
            age : {$gt : parseInt(process.argv[2])}
        },function(err, count){
            if (err) throw err;
            console.log(count);
            db.close();
        });
    }
    else throw err;
});