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
  playShip(location) {
    if (this.board[location] !== "") {
      return "Please choose another square, this one is already taken";
    }
    if (
      this.board[location] === "" &&
      (location % 10) - 10 + Ship.length < 10
    ) {
      for (let z = Ship.length; z > 0; z--) {
        this.board[location] = "x";
      }

      return this.board;
    } else {
      return "The ship cannot fit there";
    }
  }

  //recieveAttack function (ship hit or not, ship sunk or not.) Mark space accordingly
  //check if all ships are sunk
}

export { Ship, Gameboard };
