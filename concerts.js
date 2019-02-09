var axios = require("axios");
var moment = require('moment');
var artist = process.argv.slice(3).join(" ");

var Concerts = function() {
   
    this.concertsInTown = function() {
        axios.get(
            "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
            .then(function(response) {
                var jsonData= response.data;
                for(var i = 0; i < jsonData.length; i++) {
                    var venue = jsonData[i].venue;
                    var date = jsonData[i].datetime;
                    var formattedDate = moment(date).format("MM-DD-YYYY");
                    console.log(`
                    Name:  ${venue.name}
                    Location: ${venue.city}, ${venue.country}
                    Date: ${formattedDate}
                    `);
                }
            });
    }
};


module.exports = Concerts;