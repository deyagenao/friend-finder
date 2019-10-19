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
    app.post("/api/friends", function(req, res){
        
        // create a newFriend variable equal to the results of the new user
        var newFriend = req.body;

        // setting up the bestFriend variable which will be set to the best match for the new user
        // set the best match to first equal the first person in the friends array 
        var bestFriend = friendsData[0];
    
        // Set up a variable for the lowestTotalDifference equal to the highest possible difference from survey results. This will help determine who the best match will be 
        var lowestTotalDifference = 40;
    
        // Begin a for loop to compare the new results against all of the old results 
        for (var i=0; i < friendsData.length; i++){
    
            // set up the totalDifference variable to add the differences for each
            var totalDifference = 0;
    
            // For each comparison, run a for loop to compare all of the scores. 
            for (var j=0; j < friendsData[i].scores.length; j++){
    
                // For each index position, subtract the difference and convert to an absolute value. Add this value to the totalDifference variable 
                totalDifference += Math.abs(parseInt(newFriend.scores[j]) - parseInt(friendsData[i].scores[j]));
    
            }
    
            // after all scores have been compared, if the totalDifference is less than the previous, set the best match variable equal to the current friend being compared 
            if (totalDifference < lowestTotalDifference){
                bestFriend = friendsData[i];
                lowestTotalDifference = totalDifference
            }
        }


        friendsData.push(req.body);
        console.log("something might have worked...");
        res.json(bestFriend);
    })
}