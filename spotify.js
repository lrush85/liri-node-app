var Spotify = require("node-spotify-api");
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);
var spotifySearch = process.argv.slice(3).join(" ");

var SpotifyAPI = function() {

    this.spotifyQuery = function() {

        spotify
        .search({ 
            type: 'track', 
            query: spotifySearch
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
    };
};

module.exports = SpotifyAPI;
