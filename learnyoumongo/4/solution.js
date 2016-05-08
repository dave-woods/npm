/*
Here we will learn how to search for documents but only fetch the fields
we need. Also known as projection in MongoDB

Use the parrots collection to find all documents where age
is greater than the first argument passed to your script.

The difference from the last lesson will be that we only want the
name and age properties

Using console.log, print the documents to stdout.
*/

var url = "mongodb://localhost:27017/learnyoumongo";
var mongo = require('mongodb').MongoClient;
mongo.connect(url, function(err, db) {
    if(!err)
    {
        db.collection("parrots").find({
            age : {$gt : parseInt(process.argv[2])}
        },{
            name: 1,
            age: 1,
            _id: 0
        }).toArray(function(err, documents){
            if (!err)
                console.log(documents);
            db.close();
        });
    }
});