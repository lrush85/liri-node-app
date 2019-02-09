require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys");
var axios = require("axios");
var moment = require("moment");
var Concerts = require("./concerts");

// var spotify = new Spotify(keys.spotify);
var concerts = new Concerts();
var command = process.argv[2];
var searchSpotify = process.argv.splice(3).join(" ");

var spotify = new Spotify({
    id: '8a89caa560424a1d949b65639e985e6b',
    secret: 'cf847ccef92949a4990b83180d6385aa'
  });

console.log(spotify);

switch(command) {
    case "concert-this":
        concerts.concertsInTown();
        break;
    case "spotify-this-song":

        console.log(searchSpotify);
        
        spotify
        .search({ type: 'track', query: 'All the Small Things' })
        .then(function(response) {
            console.log(response.tracks.items.duration_me);
        })
        .catch(function(err) {
            console.log(err);
        });



        console.log("Song on spotify");
        break;
    case "movie-this":
        //run something
        console.log("Movie on OMDB");
        break;
    case "do-what-it-says":
        //run something
        console.log("Runs the random.txt file");
        break;
}