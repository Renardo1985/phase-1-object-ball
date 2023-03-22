function gameObject()
{
    const gameDay = 
    {
        home:
        {
        teamName:"Brooklyn Nets",
        colors:['Black','White'], 
        players:
            {
                "Alan Anderson":{number:"0", shoe:16, points:22, rebounds:12, assists:12, steals:3, blocks:1, slamDunks:1},
                "Reggie Evans":{number:"30", shoe:14, points:12, rebounds:12, assists:12, steals:12, blocks:12, slamDunks:7},
                "Brook Lopez":{number:"11", shoe:17, points:17, rebounds:19, assists:10, steals:3, blocks:1, slamDunks:15},
                "Mason Plumlee":{number:"1", shoe:19, points:26, rebounds:12, assists:6, steals:3, blocks:8, slamDunks:5},
                "Jason Terry":{number:"31", shoe:15, points:19, rebounds:2, assists:2, steals:4, blocks:11, slamDunks:1}

            }
        },    
        away:
        {
        teamName:"Charlotte Hornets",
        colors:['Turquoise','Purple'], 
        players:
            {
                "Jeff Adrien":{number:"4", shoe:18, points:10, rebounds:1, assists:1, steals:2, blocks:7, slamDunks:2},
                "Bismak Biyombo":{number:"0", shoe:16, points:12, rebounds:4, assists:7, steals:7, blocks:15, slamDunks:10},
                "DeSagna Diop":{number:"2", shoe:14, points:24, rebounds:12, assists:12, steals:4, blocks:5, slamDunks:5},
                "Ben Gordon":{number:"8", shoe:15, points:33, rebounds:3, assists:2, steals:1, blocks:1, slamDunks:0},
                "Brendan Haywood":{number:"33", shoe:15, points:6, rebounds:12, assists:12, steals:22, blocks:5, slamDunks:12}
            }
        }
    }
return gameDay;
}

function homeTeamName()
{
    return gameObject()["home"]["teamName"];
}

function numPointScored(name)
{
    let object1 = gameObject();
    for (let key1 in object1)
    {
        let teamsObj = object1[key1];
        for (let key2 in teamsObj)
        {
        let playData = teamsObj.players;
            for (let key3 in playData)
            {
                if (key3 == name)
                {
                    return playData[key3].points;
                }
                debugger
            }
            
        }
    }

}
function shoeSize(name)
{
    let object1 = gameObject();
    for (let key1 in object1)
    {
        let teamsObj = object1[key1];
        for (let key2 in teamsObj)
        {
        let playData = teamsObj.players;
            for (let key3 in playData)
            {
                if (key3 == name)
                {
                    return playData[key3].shoe;
                }
                debugger
            }
            
        }
    }

}

function teamColors(tname)
{
    let object1 = gameObject();
    for (let key1 in object1)
    {
       debugger
        let teamsObj = object1[key1];
        for (let key2 in teamsObj)
        {
                if(teamsObj[key2] == tname)
                {
                   return (teamsObj.colors);
                }
                debugger
            
        }
    }

}


console.log (teamColors("Charlotte Hornets"));


