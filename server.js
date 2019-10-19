// Dependencies 
var express = require("express");
var path = require("path");

// Create connection to server 
var app = express();
var PORT = process.env.PORT || 8080;

//
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// 
app.listen(PORT, function(){

})
