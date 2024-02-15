const team = {
    _players: [{firstName: "joe",
                lastName: "doe",
                age: 23},
                {firstName: "john",
                lastName: "boobie",
                age: 21},
                {firstName: "james",
                lastName: "lincoln",
                age: 22}
    ],
    _games: [{opponent: "Denver",
              teamPoints: 2,
              opponentPoints: 1},
              {opponent: "Tigers",
              teamPoints: 5,
              opponentPoints: 6},
              {opponent: "Jackels",
              teamPoints: 4,
              opponentPoints: 22}
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      this._players.push({firstName: newFirstName, lastName: newLastName, age: newAge});
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      this._games.push({opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints})
    }
  };
  
  team.addPlayer("jeremy", "jones", 35)
  console.log(team.players)
  
  team.addGame("Michigan", 4, 5)
  console.log(team.games)