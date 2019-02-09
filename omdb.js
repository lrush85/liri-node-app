var axios = require("axios");

var title = process.argv.slice(3).join(" ");
var OmdbApi = function () {
    this.omdbSearch = function() {
        axios.get(
            "http://www.omdbapi.com/?t=" + title+ "&y=plot=short&apikey=trilogy")
            .then(function(response) {
                var jsonData= response.data;
                console.log(jsonData);
                console.log(`
                Title: ${jsonData.Title}
                Year: ${jsonData.Year}
                IMDB Rating: ${jsonData.imdbRating}
                Rotten Tomatoes Rating: ${jsonData.Ratings[1].Value}
                Country Produced: ${jsonData.Country}
                Plot: ${jsonData.Plot}
                Actors: ${jsonData.Actors}
                `);
            });
        
        
        console.log("Movie on OMDB");
    };
    
};

module.exports = OmdbApi;