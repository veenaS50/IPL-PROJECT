function fetchAndVisualizeData() {
    fetch("./data.json")
      .then(r => r.json())
      .then(visualizeData);
  }
  
  fetchAndVisualizeData();
  
  function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
    visualizeTotalMatchesWonByTeam(data.totalMatchesWonByTeam);
    visualizeExtraRunsConceded2016(data.extraRunsConceded2016); 
    visualizeBowlersEconomy2015(data.bowlersEconomy2015);
    visualizeStadium(data.winningTeamByVenue);
    return; 
  }
  
  function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
    const seriesData = [];
    for (let year in matchesPlayedPerYear) {
      seriesData.push([year, matchesPlayedPerYear[year]]);
    }
  
    Highcharts.chart("matches-played-per-year", {
      chart: {
        type: "column"
      },
      title: {
        text: "Matches Played Per Year"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Matches"
        }
      },
      series: [
        {
          name: "Years",
          data: seriesData
        }
      ]
    });
  }
  
  function visualizeTotalMatchesWonByTeam(totalMatchesWonByTeam) {
    const seriesData = [];
    for (let winner in totalMatchesWonByTeam) {
      seriesData.push([winner, totalMatchesWonByTeam[winner]]);
    }
  
    Highcharts.chart("total-matches-won-by-team", {
      chart: {
        type: "column"
      },
      title: {
        text: "Total Matches Won By Team"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Sum of no. of wins in all years"
        }
      },
      series: [
        {
          name: "Teams",
          data: seriesData
        }
      ]
    });
  }

  function visualizeExtraRunsConceded2016(extraRunsConceded2016) {
    const seriesData = [];
    for (let winner in extraRunsConceded2016) {
      seriesData.push([winner, extraRunsConceded2016[winner]]);
    }
  
    Highcharts.chart("extra-runs-conceded-2016", {
      chart: {
        type: "column"
      },
      title: {
        text: "Extra Runs Conceded in 2016"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Extra runs conceded"
        }
      },
      series: [
        {
          name: "Teams",
          data: seriesData
        }
      ]
    });
  }

  function visualizeBowlersEconomy2015(bowlersEconomy2015) {
    const seriesData = [];
    for (let year in bowlersEconomy2015) {
      seriesData.push([year, bowlersEconomy2015[year]]);
    }
  
    Highcharts.chart("bowlers-economy-2015", {
      chart: {
        type: "column"
      },
      title: {
        text: "Top Economical Bowlers"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Number"
        }
      },
      series: [
        {
          name: "Name of Players",
          data: seriesData
        }
      ]
    });
  }

  function visualizeStadium(winningTeamByVenue) {
    const seriesData = [];
    const stadiums = [];
    const teams = {};
  
    const entries = Object.entries(winningTeamByVenue);
  
    for(let entry of entries) {
      const name = entry[0];
      stadiums.push(name);
      const obj = entry[1];
      for(let team in obj) {
        if(teams[team]) {
          teams[team].push(obj[team])
        } else {
          teams[team] = [];
          teams[team].push(obj[team])
        }
      }
  
    }
    for(let name in teams) {
      seriesData.push({ name, data: teams[name] })
    }
  
    Highcharts.chart('winning-team-by-venue', {
      chart: {
          type: 'bar'
      },
      title: {
          text: '5. Story: Matches Won by each team per Stadium'
      },
      xAxis: {
          categories: stadiums
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Total Venues'
          }
      },
      legend: {
          reversed: true
      },
      plotOptions: {
          series: {
              stacking: 'normal'
          }
      },
      series: seriesData
  });
  
  }