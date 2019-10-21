### Friend Finder
# An Application for Finding New Friends 
Friend Finder is an application that uses Node and Express to help you find your best friend. Users can take a short 10 multiple-choice question quiz. Their results will then be compared to all other previous "friends" who have completed the survey to find the best possible match for the user's new friend. Once determined, the new friend's name and photo will be displayed to the user. 

# How to Run Friend Finder 
Friend Finder uses Node and Express to run its server. Once the server is connected and running, users can access two html routes: 
- `/Home`: the home page for Friend Finder 
- `/Survey`: the page where users can complete the survey and receive their results 

# About the Code 
The Friend Finder code is broken down into several components: 
- Server.js: javascript file that establishes the server connection using Express. This file also includes the express middleware that allows data to be parsed through different http requests, and connections to the routing javascript files. 
- Routing: two javascript files, one for html routes that includes "GET" routes to direct to the static html files for the home and survey pages and another file for API routes. One of these routes includes a "GET" route to the API list for all friends who have completed the survey and their survey scores. The other is a "POST" route that sends the new survey results to the server, compares survey results, and responds with the data of the best friend match. 
- HTML files: home and survey files 
- Friends Data: a javascript file that contains the data for the survey results, as well as seed data 
 