function topEconomicalBowlers(matches,deliveries)
{
  const runs=[];
  const r={};
  for(let match of matches)
  {
      if(match.season==='2015')
      {
        for(let delivery of deliveries)
        {
          if(match.id===delivery.match_id)
          {
            if (r[delivery.bowler])
            {
                r[delivery.bowler]+=(parseInt(delivery.total_runs)-parseInt(delivery.bye_runs)-parseInt(delivery.legbye_runs)-parseInt(delivery.penalty_runs))
            }
            else
            {
                r[delivery.bowler]=(parseInt(delivery.total_runs)-parseInt(delivery.bye_runs)-parseInt(delivery.legbye_runs)-parseInt(delivery.penalty_runs))
            }
          }
        }
      }
  }
  const u={};
  for(let match of matches)
  {
      if(match.season==='2015')
      {
        for(let delivery of deliveries)
        {
          if(match.id===delivery.match_id)
          {
            if (u[delivery.bowler])
            {
                if(delivery.ball)
                {
                    u[delivery.bowler]+=1
                }
                else
                {
                    u[delivery.bowler]=1
                }           
            }
            else
            {
                u[delivery.bowler]=1
            }
          }
        }
      }
  }
  result={};
  for(let i in r)
  {
    result[i]=(r[i]*6/u[i]).toFixed(2)
  }
var sortable = [];
for (var t in result) {
    sortable.push([t, result[t]]);
}

sortable.sort(function(a, b) {
    return a[1] - b[1];
});
s=sortable.slice(0,10)
final={};
for(let i=0;i<s.length;i++)
{
  final[s[i][0]]=parseFloat(s[i][1])
}
return final
}
module.exports=topEconomicalBowlers; 