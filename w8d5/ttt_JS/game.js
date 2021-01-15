const Board = require("/board.js");
const Player = require("/player.js")


// play loop (Game#play)
// 1. get current player  (Game#currentPlayer)
// 2. prompt player for move (Game#promptMove)
    // 2a. validate legal move  (Game#_legalMove)
    // 2b. update board (Board#placeMark)
// 3. check for win (Game#wonGame)
// 4. check for full board (draw) (Game#wonGame)
// 5. change current player     (Game#changeTurn)
class Game {
    constructor(p1, p2) {
        this.player1 = p1;
        this.player2 = p2;
        this.board = new Board();
    }

    promptMove() {
        continue;
    }

    currentPlayer() {
        continue;
    }

    _legalMove() {
        continue;
    }

    wonGame() {
        continue;
    }

    changeTurn() {
        continue;
    }

    play() {

    }

}