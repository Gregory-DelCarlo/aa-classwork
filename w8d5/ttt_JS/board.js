

class Board {
    constructor() {
        this.grid = [
            [undefined, undefined, undefined],
            [undefined, undefined, undefined],
            [undefined, undefined, undefined]
        ]
    }

    won() {
        continue;
    }

    _checkHorizontals(marker) {
        let win = true;
        
        for (let j = 0; j < 3; j++) {
            let column = [];
            for (let i = 0; i < 3; i++) {
                win = true;
                column.push(this.grid[j][i]);
            }
            win = this._checkSet(column, marker)
            if (win === true) {
                break;
            }
        }

        return win;
    }
    _checkVerticals(marker) {
        let win = true;
        
        for (let j = 0; j < 3; j++) {
            let row = [];
            for (let i = 0; i < 3; i++) {
                win = true;
                row.push(this.grid[i][j]);
            }
            // console.log(row)
            win = this._checkSet(row, marker)
            if (win === true) {
                break;
            }
        }

        return win;
    }

    _checkDiagonals(marker) {
        let leftDiag = [];
        let rightDiag = [];

        for(let i = 0; i < 3; i++) {
            leftDiag.push(this.grid[i][i])
            rightDiag.push(this.grid[i][-i-1])
        }
        let win = true;
        win = this._checkSet(leftDiag, marker)
        if (win === false) {
            win = this._checkSet(rightDiag, marker)
        }
        return win;
    }

    _checkSet(set, marker) {
        let win = true;
        set.forEach(el => {
            if (el !== marker) {
                win = false;
            }
        });

        return win;
    }

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

    changeGrid(grid) {
        this.grid = grid;
    }

}

// let vb1 = [
//     [undefined, "X",undefined],
//     [undefined, "X", undefined],
//     [undefined, "X", undefined]
// ];

// let vb2 = [
//     [undefined, "X",undefined],
//     ["X", undefined, undefined],
//     [undefined, "X", undefined]
// ];

// let vb3 = [
//     [undefined, "X",undefined],
//     [undefined, "O", undefined],
//     [undefined, "X", undefined]
// ]

// let hb1 = [
//     [undefined, undefined, undefined],
//     [undefined, undefined, undefined],
//     ["X", "X", "X"]
// ];

// let hb2 = [
//     [undefined, undefined, undefined],
//     [undefined, "X", undefined],
//     ["X", undefined, "X"]
// ];

// let hb3 = [ 
//     [undefined, undefined, undefined],
//     [undefined, undefined, undefined],
//     ["X", "O", "X"]
// ]

// let db1 = [
//     ["X", undefined, undefined],
//     [undefined, "X", undefined],
//     [undefined, undefined, "X"]
// ];

// let db2 = [
//     ["X", undefined, undefined],
//     ["X", undefined, undefined],
//     [undefined, undefined, "X"]
// ];

// let db3 = [
//     ["X", undefined, undefined],
//     [undefined, "O", undefined],
//     [undefined, undefined, "X"]
// ]

// let b = new Board();
// b.changeGrid(hb1);
// console.log(b.grid);
// console.log("Expected Output: true");
// console.log(b._checkHorizontals('X'));

// b.changeGrid(hb2);
// console.log(b.grid);
// console.log("Expected Output: false");
// console.log(b._checkHorizontals('X'));

// b.changeGrid(hb3);
// console.log(b.grid);
// console.log("Expected Output: false");
// console.log(b._checkHorizontals('X'));

// b.changeGrid(vb1);
// console.log(b.grid);
// console.log("Expected Output: true");
// console.log(b._checkVerticals('X'));

// b.changeGrid(vb2);
// console.log(b.grid);
// console.log("Expected Output: false");
// console.log(b._checkVerticals('X'));

// b.changeGrid(vb3);
// console.log(b.grid);
// console.log("Expected Output: false");
// console.log(b._checkVerticals('X'));

// b.changeGrid(db1);
// console.log(b.grid);
// console.log("Expected Output: true");
// console.log(b._checkDiagonals('X'));

// b.changeGrid(db2);
// console.log(b.grid);
// console.log("Expected Output: false");
// console.log(b._checkDiagonals('X'));

// b.changeGrid(db3);
// console.log(b.grid);
// console.log("Expected Output: false");
// console.log(b._checkDiagonals('X'));
