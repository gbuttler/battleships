import { Ship, Gameboard, Player } from "./components";

class Gameplay {
  constructor() {
    this.gameOver = false;
    this.playerOnTurn = this.playerOnTurn;
    this.player = new Player("real", "Player");
    this.computer = new Player("computer", "Computer");
    this.playerGameboard = new Gameboard();
    this.computerGameboard = new Gameboard();
  }

  //ships
  carrier = new Ship(5);
  battleship = new Ship(4);
  cruiser = new Ship(3);
  submarine = new Ship(3);
  destroyer = new Ship(2);

  //display one grid per player on the html screen
  displayBoard() {
    this.playerGameboard.createBoard();
    this.computerGameboard.createBoard();
    let playerGameGrid = document.getElementById("player-game-grid");
    let computerGameGrid = document.getElementById("computer-game-grid");

    //create player game grid
    for (let i = 0; i < this.playerGameboard.board.length; i++) {
      console.log("making a grid");
      let gameSquare = document.createElement("div");
      gameSquare.className = "game-square";
      gameSquare.id = `play-square-${i}`;
      playerGameGrid.appendChild(gameSquare);
    }

    //create computer game grid
    for (let i = 0; i < this.computerGameboard.board.length; i++) {
      console.log("making a grid");
      let gameSquare = document.createElement("div");
      gameSquare.className = "game-square";
      gameSquare.id = `comp-square-${i}`;
      computerGameGrid.appendChild(gameSquare);
    }
  }

  populateBoard() {
    //both will be assigned for now in the code

    this.playerGameboard.playShip(this.carrier, 5);
    this.playerGameboard.playShip(this.battleship, 14);
    this.playerGameboard.playShip(this.cruiser, 36);
    this.playerGameboard.playShip(this.submarine, 62);
    this.playerGameboard.playShip(this.destroyer, 97);

    //HOW TO GET PLAYER AND COMP ON DIFFERENT BOARDS
    // this.computerGameboard.playShip(this.carrier, 12);
    // this.computerGameboard.playShip(this.battleship, 34);
    // this.computerGameboard.playShip(this.cruiser, 50);
    // this.computerGameboard.playShip(this.submarine, 73);
    // this.computerGameboard.playShip(this.destroyer, 91);
  }
}

export { Gameplay };
