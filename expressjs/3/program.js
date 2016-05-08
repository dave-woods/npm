/*
Create an Express.js app with a home page rendered by Jade template engine.

The homepage should respond to /home.

The view should show the current date using toDateString.
*/

// Note: Jade has been renamed to Pug

var port = Number(process.argv[2]);
var express = require("express");
var path = require("path");
var app = express();
app.set("views", process.argv[3]);
app.set("view engine", "jade");
app.get("/home", function(req, res){
    res.render("index", {date: new Date().toDateString()});
});
app.listen(port);