

class Board {
    constructor() {
        this.grid = [
            ['X', undefined, undefined],
            [undefined, undefined, undefined],
            ['X', undefined, undefined]
        ]
    }

    won() {
        continue;
    }

    _checkHorizontals(marker) {
        let column = [];
        let win = false;

        for (let j = 0; j < 3; j++) {
            for (let i = 0; i < 3; i++) {
                win = true;
                column.push(this.grid[j][i]);
            }
            column.forEach(el => {
                if (el !== marker) {
                    win = false;
                }
            });

            if (win === true) {
                return true;
            } else {
                column = [];
            }
        }

        return false;
    }
    _checkVerticals(marker) {
        let column = [];
        let win = false;

        for (let j = 0; j < 3; j++) {
            for (let i = 0; i < 3; i++) {
                win = true;
                column.push(this.grid[i][j]);
            }
            column.forEach(el => {
                if (el !== marker) {
                    win = false;
                }
            });

            if (win === true) {
                return true;
            } else {
                column = [];
            }
        }

        return false;
    }
    _checkDiagonals() {}

    winner() {
        continue;
    }

    empty() {
        continue;
    }

    placeMark() {
        continue;
    }

    printGrid() {
        continue;
    }

    fullBoard() {
        continue;
    }

}

let b = new Board();
console.log(b._checkHorizontals('X'));
