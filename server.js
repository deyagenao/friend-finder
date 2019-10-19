// require("dotenv").config();

// =============================================================================
// DEPENDENCIES
// =============================================================================

var express = require("express");


// =============================================================================
// EXPRESS CONFIGURATION
// =============================================================================

// Create connection to server 
var app = express();

// Set up the PORT. Include the process.env.PORT to allow for heroku's PORT
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// =============================================================================
// ROUTER 
// Requiring the routes established in the api and html route files 
// =============================================================================

// require("./routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);




// =============================================================================
// LISTENER 
// Starting the server 
// =============================================================================

app.listen(PORT, function(){
    console.log("App listening on PORT:", PORT);
})
