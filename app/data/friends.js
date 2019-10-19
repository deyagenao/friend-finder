// ===============================================================================
// DATA
// Below data holds friends' completed survey data. Dummy data to allow for logic to determine best friend
// ===============================================================================


var friendsArray = [
    {
        name:"Ahmed",
        photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores:[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        name: "Jacob Deming",
        photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
        scores: [
            4,
            2,
            5,
            1,
            3,
            2,
            2,
            1,
            3,
            2
        ]
    },
    {
        name: "Jeremiah Scanlon",
        photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
        scores: [
            5,
            2,
            2,
            2,
            4,
            1,
            3,
            2,
            5,
            5
        ]
    },
    {
        name: "Louis T. Delia",
        photo: "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
        scores: [
            3,
            3,
            4,
            2,
            2,
            1,
            3,
            2,
            2,
            3
        ]
    }
]

// Create a function that receives the friendsArray as an argument and determines the best friend match


// Set up a variable for the best match, should be an empty object 
var bestFriend = {};

function findBestFriend(obj, arr){

    // set the best match to first equal the first person in the friendsArray 
    bestFriend = arr[0];

    // Set up a variable for the lowestTotalDifference equal to the highest possible difference from survey results 
    var lowestTotalDifference = 40;

    // Begin a for loop to compare the new results against all of the old results 
    for (var i=0; i < arr.length; i++){

        // set up the totalDifference variable to add the differences for each
        var totalDifference = 0;

        // For each comparison, run a for loop to compare all of the scores. 
        for (var j=0; j < arr[i].scores.length; j++){

            // For each index position, subtract the difference and convert to an absolute value. Add this value to the totalDifference variable 
            totalDifference += Math.abs(parseInt(obj.scores[j]) - parseInt(arr[i].scores[j]));

        }

        // after all scores have been compared, if the totalDifference is less than the previous, set the best match variable equal to the current friend being compared 
        if (totalDifference < lowestTotalDifference){
            bestFriend = arr[i];
            lowestTotalDifference = totalDifference
        }
    }
    console.log(bestFriend);
}

var newFriend = {
    name: "dg",
    scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
};

findBestFriend(newFriend, friendsArray);



// Exporting the friendsArray data for use in api routes file
module.exports = friendsArray;