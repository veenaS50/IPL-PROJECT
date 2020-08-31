function totalMatchesWonByTeam(matches) {
    const result2 = {};
    for (let match of matches) {
      const winner = match.winner;
      if (result2[winner]) {
        result2[winner] += 1;
      } else {
        result2[winner] = 1;
      }
    }
    return result2;
  }
  
  module.exports = totalMatchesWonByTeam;
  