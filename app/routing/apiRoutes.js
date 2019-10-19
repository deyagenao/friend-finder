// ===============================================================================
// LOAD DATA
// Linking routes to "data" source from the friends.js file
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    // route to get and display the API friends data 
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    })

    // route to post new survey data to the API friends list
    // app.post("/api/friends", )
}