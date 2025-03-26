import { Ship, Gameboard, Player } from "./script";

//ship tests
describe("ship", () => {
  let ship = new Ship(1);

  ship.hit();

  test("does the ship have the correct length - 1 in this case", () => {
    expect(ship.length).toBe(1);
  });

  test("does the ship have the correct hit count - 1 in this case", () => {
    expect(ship.hits).toBe(1);
  });

  test("increase hit count", () => {
    expect(ship.hits).toBe(1);
  });

  test("check if ship is sunk", () => {
    expect(ship.isSunk()).toBe(true);
  });
});

//gameboard tests

describe("gameboard", () => {
  let gameboard = new Gameboard();
  let ship = new Ship(2);
  let ship2 = new Ship(5);
  gameboard.addToFleet(ship);
  gameboard.addToFleet(ship2);

  test("is the fleet created", () => {
    expect(gameboard.fleet).toEqual([
      { hits: 0, length: 2, sunk: false },
      { hits: 0, length: 5, sunk: false },
    ]);
  });

  test("test the ship's length is being received (2 in this case)", () => {
    expect(ship.length).toBe(2);
  });

  test("does the 10x10 gameboard appear", () => {
    expect(gameboard.createBoard()).toStrictEqual([
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ]);
  });

  test("check if the board is displayed properly", () => {
    expect(gameboard.showBoard()).toStrictEqual(
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""]
    );
  });

  test("check that a 2 square length ship can be played", () => {
    expect(gameboard.playShip(ship, 4, 2)).toStrictEqual([
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "x",
      "x",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ]);
  });

  test("check that a miss is recorded", () => {
    expect(gameboard.receiveAttack(ship, 1, 1)).toStrictEqual([
      "-",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "x",
      "x",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ]);
  });

  test("check that a hit is recorded", () => {
    expect(gameboard.receiveAttack(ship, 4, 2)).toStrictEqual([
      "-",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "o",
      "x",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ]);
  });

  test("check that all ships are sunk", () => {
    expect(gameboard.allSunk()).toBe(false);
  });
});

describe("player", () => {
  let player = new Player("real", "Grace");
  // player.playerName = "Grace";

  test("new player created called Grace", () => {
    expect(player.playerName).toBe("Grace");
  });

  test("expect that new player to be a real person", () => {
    expect(player.playerType).toBe("real");
  });
});
