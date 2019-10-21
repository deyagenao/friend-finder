// ===============================================================================
// DEPENDENCIES
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

// Exporting the Express app from the server.js file to use app for creating routes 
module.exports = function(app){

    //HTML Get Requests to display the static pages to user 

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // If no matching route is found, then redirect user to the home page 
    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};