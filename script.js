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
  //allow a ship of a specific length to be placed on the board (and not allowed if it won't fit) - specific coordinates
  //recieveAttack function (ship hit or not, ship sunk or not.) Mark space accordingly
  //check if all ships are sunk
}

export { Ship, Gameboard };
