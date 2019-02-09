
// Required Dependencies
require("dotenv").config();
var fs = require("fs");
var Spotify = require("node-spotify-api");
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);
var Concerts = require("./concerts");
var OmdbApi = require("./omdb");
var SpotifyAPI = require("./spotify");



// Add new instance of a constructor

var concerts = new Concerts();
var omdbCall= new OmdbApi();
var spotify = new SpotifyAPI();
var command = process.argv[2] ;

switch(command) {
    case "concert-this":
        concerts.concertsInTown();
        break;
    case "spotify-this-song":
        spotify.spotifyQuery();
        break;
    case "movie-this":
        omdbCall.omdbSearch();
        break;
    case "do-what-it-says":
        fs.readFile("random.txt", "utf8", function (error,data) {
            
            if(error) {
                return console.log(error);
            }
           
            var Spotify = require("node-spotify-api");
            var keys = require("./keys");
            var spotify = new Spotify(keys.spotify);
            splitData = data.split(",");
            command = splitData[0];
            spotify
            .search({ 
                type: 'track', 
                query: splitData[1]
            })
            .then(function(response) {
            console.log("Song on spotify");
            var jsonData = response.tracks;
            var jsonDataLoop = jsonData.items[0];
            var artists = jsonDataLoop.artists[0].name;
            var songName = jsonDataLoop.name;
            var previewURL = jsonDataLoop.preview_url;
            var album = jsonDataLoop.album.name;

            console.log(`
            Artist: ${artists}
            Song: ${songName}
            Album: ${album}
            Preview URL: ${previewURL}
            `);
                
            })
            .catch(function(err) {
                console.log(err);
            });
            });
            console.log("Runs the random.txt file");
            break;
}