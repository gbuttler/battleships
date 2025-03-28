class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits++;
  }

  isSunk() {
    if (this.length === this.hits) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

class Gameboard {
  constructor() {
    this.board = [];
    this.fleet = [];
  }

  addToFleet(ship) {
    this.fleet.push(ship);
  }

  //create gameboard 10x10 squares
  createBoard() {
    for (let i = 0; i < 100; i++) {
      this.board.push("");
    }
    return this.board;
  }

  //split up the gameboard into rows (like tic tac toe)
  showBoard() {
    const lineOne = this.board.slice(0, 10);
    const lineTwo = this.board.slice(10, 20);
    const lineThree = this.board.slice(20, 30);
    const lineFour = this.board.slice(30, 40);
    const lineFive = this.board.slice(40, 50);
    const lineSix = this.board.slice(50, 60);
    const lineSeven = this.board.slice(60, 70);
    const lineEight = this.board.slice(70, 80);
    const lineNine = this.board.slice(80, 90);
    const lineTen = this.board.slice(90, 100);

    return (
      lineOne,
      lineTwo,
      lineThree,
      lineFour,
      lineFive,
      lineSix,
      lineSeven,
      lineEight,
      lineNine,
      lineTen
    );
  }

  //allow a ship of a specific length to be placed on the board (and not allowed if it won't fit) - specific coordinates
  playShip(ship, index) {
    let shipLength = ship.length;
    let locationIndex = index;

    if (this.board[locationIndex] !== "") {
      return "Please choose another square, this one is already taken";
    }
    if (
      this.board[locationIndex] === "" &&
      (locationIndex % 10) - 10 + shipLength < 10
    ) {
      for (let z = shipLength; z > 0; z--) {
        let gameSquare = document.getElementById(
          `play-square-${locationIndex}`
        );
        gameSquare.innerHTML = "x";
        this.board[locationIndex] = "x";

        locationIndex++;
      }
      return console.log(this.board);
    } else {
      return "The ship cannot fit there";
    }
  }

  //recieveAttack function (ship hit or not, ship sunk or not.) Mark space accordingly
  receiveAttack(ship, xAxis, yAxis) {
    let shipHits = ship.hits;
    let shipSunk = ship.sunk;
    let locationIndex = xAxis - 1 + (yAxis - 1) * 10;

    //if space is empty return error message
    if (this.board[locationIndex] === "") {
      this.board[locationIndex] = "-";
      return this.board;
    }
    //if space has a ship - add hit to the ship
    if (this.board[locationIndex] === "x") {
      this.board[locationIndex] = "o";
      shipHits++;
      ship.isSunk();
      if (shipSunk === true) {
        return this.board;
      } else {
        return this.board;
      }
    } else {
      return "Invalid move";
    }
  }

  //check if all ships are sunk
  allSunk() {
    return this.fleet.every((ship) => ship.sunk === true);
  }
}

class Player {
  constructor(playerType, playerName) {
    this.playerType = playerType;
    this.gameboard = new Gameboard();
    this.playerName = playerName;
  }
}

export { Ship, Gameboard, Player };
