const readline = require('readline');

const reader = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout
});


function askIfgreaterThan (el1, el2, cb) {
    reader.question(`Is ${el1} bigger than ${el2}? (Y/n):`, (ans) => {
        if (ans.toUpperCase === 'Y') {
            cb(true);
        }else {
            cb(false);
        }
    });
}

function innerBubbleSortLoop (arr, i, madeAnySwaps, outerBubbleSortLoop) {
    
    if (i === arr.length - 1) {
        outerBubbleSortLoop(madeAnySwaps);
    }
    if (i < arr.length - 1) {
        
        askIfgreaterThan(arr[i], arr[i+1], isGreaterThan => {
            if (isGreaterThan) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                madeAnySwaps = true;
            } else {
                madeAnySwaps = false;
            }
            innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
        });

    }
}

function outerBubbleSortLoop() {
    console.log('in outer bubbleSortLoop');
}

let arr = [1,3,5,2,3,9];

console.log(innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop));




