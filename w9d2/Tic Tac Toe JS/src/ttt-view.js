const Game = require("../dist/game");

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $($el);
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
   $(
     () => {
      const $newBoard = $('<ul class="grid"></ul>');
      for (let i = 0; i < 9; i++) {
        $newBoard.append('<li class="grid-box"></li>');
      };
      // need to append to $el within the method or the return breaks
      this.$el.append($newBoard);
     });
  }
}

module.exports = View;

$( () =>{
  new View(new Game(), ".ttt");
});