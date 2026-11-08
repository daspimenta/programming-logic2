let heroName = "Britney Vanilla Haddaway Spears";
let wins = 300;
let defeats = 200;

function getFirstName(name){
    return name.split(" ")[0];

}

let netWins = calculateNetWins(wins, defeats);

let heroRank

function calculateNetWins(wins, defeats){
    return(wins - defeats);

}


switch(true){
    case netWins < 0:
        heroRank = "Invalid rank";
        break;

    case netWins >= 0 && netWins <= 10:
        heroRank = "Bronze";
        break;

    case netWins >= 11 && netWins <= 20:
        heroRank = "Iron";
        break;

    case netWins >= 21 && netWins <= 50:
        heroRank = "Silver";
        break; 

    case netWins >= 51 && netWins <= 80:
        heroRank = "Gold";
        break;

    case netWins >= 81 && netWins <= 90:
        heroRank = "Diamond";
        break;

    case netWins >= 91 && netWins <= 100:
        heroRank = "Legendary";
        break;

    case netWins >= 101:
        heroRank = "Immortal";
        break;

    }


console.log("Hero named " + getFirstName(heroName) + " has " + netWins + " net wins and is at the " + heroRank + " level!");