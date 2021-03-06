/*
Style your HTML from previous example with some Stylus middleware.

Your solution must listen on the port number supplied by process.argv[2].

The path containing the HTML and Stylus files is provided in process.argv[3]
(they are in the same directory). You can create your own folder and use these:

The main.styl file:

    p
      color red

The index.html file:

    <html>
      <head>
        <title>expressworks</title>
        <link rel="stylesheet" type="text/css" href="/main.css"/>
      </head>
      <body>
        <p>I am red!</p>
      </body>
    </html>
*/

var express = require("express");
var port = Number(process.argv[2]);
var filepath = process.argv[3];
var app = express();
var path = require("path");

app.use(require('stylus').middleware(filepath + '/public'));
app.use(express.static(filepath||path.join(__dirname, 'public')));

app.listen(port);

// official solution

/*
    var express = require('express')
    var app = express()
    
    app.use(require('stylus').middleware(process.argv[3]));
    app.use(express.static(process.argv[3]));
    
    
    app.listen(process.argv[2])
*/