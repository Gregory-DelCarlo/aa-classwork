const readline = require('readline');

const reader = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout
});


function askIfgreaterThan (l1, l2, cb) {
    reader.question(`Is ${l1} bigger than ${l2}? (Y/n):`, ans => {
        if (ans.toUpperCase === 'Y') {
            cb(true);
        }else {
            cb(false);
        }
    });
}

function innerBubbleSortLoop (arr, i, madeanyswaps, outerBubbleSortLoop) {

}


// askIfgreaterThan(3, 4, swap => { 
//     if (swap) {
//         console.log('anything');
//     }else {
//         console.log("nothing");
//     }
// });


