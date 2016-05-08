/*
Write a server that reads a file, parses it to JSON and outputs the content
to the user.

The port is passed in process.argv[2].  The file name is passed in process.argv[3].

Respond with:

    res.json(object)

Everything should match the '/books' resource path.
*/

var fs = require("fs");
var express = require("express");
var app = express();
app.get("/books", function(req, res){
    fs.readFile(process.argv[3], function(err, data){
        if (!err)
            return res.json(JSON.parse(data.toString()));
    });
});
app.listen(Number(process.argv[2]));

// official solution

/*
    var express = require('express')
    var app = express()
    var fs = require('fs')
    
    app.get('/books', function(req, res){
      var filename = process.argv[3]
      fs.readFile(filename, function(e, data) {
        if (e) return res.send(500)
        try {
          books = JSON.parse(data)
        } catch (e) {
          res.send(500)
        }
        res.json(books)
      })
    })
    
    app.listen(process.argv[2])
*/