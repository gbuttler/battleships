import { Ship, Gameboard } from "./script";

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
});
