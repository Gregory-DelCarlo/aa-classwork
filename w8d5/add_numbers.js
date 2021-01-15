const readline = require('readline');

const reader = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout
});

function addNumbers(sum, numsLeft, cb) {
 if (numsLeft > 0) {
  reader.question('Enter a number.', (ans) => {
    let nextNum = parseInt(ans);
    sum += nextNum;
    console.log(sum);
    numsLeft--;
    return addNumbers(sum, numsLeft, cb);
  });  
} else {
  return cb(sum);
 }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));