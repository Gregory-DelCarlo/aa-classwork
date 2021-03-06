// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  var Piece = require("./piece");
}
// DON'T TOUCH THIS CODE

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let grid = [];

  let i = 0;
  while (i < 8) {
    grid.push(Array(8).fill(undefined));
    i++;
  }

  grid[3][4] = new Piece("black");
  grid[4][3] = new Piece("black");
  grid[3][3] = new Piece("white");
  grid[4][4] = new Piece("white");

  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {

  // let valid = true;

  // pos.forEach (function(ele) {
  //   if (ele > 7 || ele < 0) {
  //     valid = false;
  //   }
  // });

  // return valid;

  let x = pos[0];
  let y = pos[1];

  if (x > 7 || x < 0 || y > 7 || y < 0) {
    return false;
  }

  return true;
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */

Board.prototype.getPiece = function (pos) {

  if (this.isValidPos(pos)) {
    return this.grid[pos[0]][pos[1]];
  } else {
    throw Error('Not valid pos!');
  }

};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let piece = this.getPiece(pos);
  if (piece === undefined) {
    return false;
  }
  return piece.color === color;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  let occupied = this.getPiece(pos);
  if (occupied === undefined) {
    return false;
  }
  return true;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
// dir =~ [0,1]
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip){
  
  let nextPos = [
    (pos[0] + dir[0]),
    (pos[1] + dir[1])
  ]

  // Board#isValidPos checks that the position is on the board
  if (!this.isValidPos(nextPos) ) {
    return [];
  }

  let nextPiece = this.grid[nextPos[0]][nextPos[1]];

  if (nextPiece === undefined) {
    return [];
  } 
  
  if (nextPiece.color === color) {
    return [];
  }

  // Recursion Part

  if (piecesToFlip === undefined) {
    piecesToFlip = [nextPos];
  } else {
    piecesToFlip.push(nextPos);
  }

  piecesToFlip.concat(this._positionsToFlip(nextPos, color, dir, piecesToFlip));
  
  return piecesToFlip;
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {

  // 1. check whether pos is undefined of not
  // - if it NOT undefined -> return false

  // 2. loop thru each direction from pos
  // -> call Board#_positionsToFlip on each of the 8 directions
  // -> put results in a BIG array (it will contain subarrays)

  // 3. check if any of the subarrays are NOT []
  // -> means we have a valid move -> true

  let piece = this.grid[pos[0]][pos[1]];

  if ( !(piece === undefined) ) {
    return false;
  }
  // this is a little buggy but we need to check that the row of flips ends in a piece with the same
  // color before returning true
  let i = 0;
  while (i < Board.DIRS.length) {
    let possibleFlips = this._positionsToFlip(pos, color, Board.DIRS[i]);

    if (possibleFlips.length > 0) {

      let lastFlip = possibleFlips[possibleFlips.length-1]
      let finalPos = [
        (lastFlip[0] + Board.DIRS[i][0]),
        (lastFlip[1] + Board.DIRS[i][1])
      ]
      let finalPiece = this.grid[finalPos[0]][finalPos[1]]

      if (finalPiece === undefined) {
        i++;
        continue;
      }

      if (finalPiece.color === color){
        return true;
      }
    }

    i++;
  }

  return false;
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};


// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  module.exports = Board;
}
// DON'T TOUCH THIS CODE