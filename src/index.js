import "./styles.css";
import { Gameplay } from "./game";
import { Ship, Gameboard, Player } from "./components";

const game = new Gameplay();

game.displayBoard();

game.populateBoard();
