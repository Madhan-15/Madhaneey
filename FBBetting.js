const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
};
var Team1={
    players:game.players[0]
}
Team1.gk=Team1.players[0]
Team1.fieldPlayers=Team1.players.slice(1)
Team1.substitutePlayers=[
    "Thiago", "Coutinho" , "Perisic"
]
Team1.finalPlayers=[Team1.fieldPlayers+Team1.substitutePlayers]

var Team2={
    players:game.players[1]
}
Team2.gk=Team2.players[0]
Team2.fieldPlayers=Team1.players.slice(1)

var AllPlayers=Team1.finalPlayers+Team2.players

for (let index = 0; index < game.scored.length; index++) {
    console.log(`Goal ${index+1}:${game.scored[index]}`);
}

const OddOfTeam1=game.odds.team1
const OddOfDraw=game.odds.x
const OddOfTeam2=game.odds.team2
var AvgOdd=(OddOfTeam1+OddOfTeam2+OddOfDraw)/3
console.log(`\nAverage Odd...${AvgOdd}\n`);
console.log(`Odd of victory ${game.team1}:${game.odds.team1}`);
console.log(`Odd of victory ${game.team2}:${game.odds.team2}`);
console.log(`Odd of Draw :${game.odds.x}\n`);

var scorers={
    Lewandowski:2,Gnarby:1,Hummels:1
}