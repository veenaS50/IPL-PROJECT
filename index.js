const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const totalMatchesWonByTeam = require("./ipl/totalMatchesWonByTeam");
const extraRunsConceded2016 = require("./ipl/extraRunsConceded2016");
const bowlersEconomy2015 = require("./ipl/bowlersEconomy2015");
const winningTeamByVenue = require("./ipl/winningTeamByVenue");
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      const result = {};
      result.matchesPlayedPerYear = matchesPlayedPerYear(matches);
      result.totalMatchesWonByTeam = totalMatchesWonByTeam(matches);
      result.winningTeamByVenue = winningTeamByVenue(matches);
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
          result.extraRunsConceded2016 = extraRunsConceded2016(matches, deliveries);
          result.bowlersEconomy2015 = bowlersEconomy2015(matches, deliveries);
          saveData(result);
        });
    });
}


function saveData(result) {
  let jsonData = result
  let jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();
