function extraRunsConceded2016(matches, deliveries)
{
   r={}; 
   for(let match of matches)
   {
       if(match.season==='2016')
       {
          for(let delivery of deliveries)
          {
              if(match.id===delivery.match_id)
              {
                  if(r[delivery.bowling_team])
                  {
                      r[delivery.bowling_team]+=parseInt(delivery.extra_runs)
                  }
                  else
                  {
                      r[delivery.bowling_team]=parseInt(delivery.extra_runs)
                  }
              }
          }
       }
   }
   return r
}
module.exports = extraRunsConceded2016;