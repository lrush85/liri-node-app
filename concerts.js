var fs = require("fs");
var axios = require("axios");
var moment = require('moment');
var artist = process.argv.splice(3).join(" ");

var Concerts = function() {
    var divider = "\n------------------------------------------------------------\n\n";
    this.concertsInTown = function() {
        axios.get(
            "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
            .then(function(response) {
                var jsonData= response.data;
                for(i = 0; i < jsonData.length; i++) {
                    var venue = jsonData[i].venue;
                    var date = jsonData[i].datetime;
                    var formattedDate = moment(date).format("MM-DD-YYYY");
                    showVenueInfo = [
                        "Name: " + venue.name,
                        "Location: " + venue.city + ", " + venue.country,
                        "Date: " + formattedDate
                    ].join("\n");
    
                    fs.appendFile("concertlog.txt", showVenueInfo + divider, function(err) {
                        if(err) throw err;
                        console.log(showVenueInfo);
                    });
                }
            });
    }
};


module.exports = Concerts;