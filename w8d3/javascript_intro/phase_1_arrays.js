// Array#uniq - returns a new array containing each individual element of the original array only once (creating all unique elements)
// the elements should be in the order in which they first appear in the original array
// should not mutate the original array

Array.prototype.uniq = function() {
    let arr = [];
    for ( let i = 0; i < this.length; i++) {
        if (arr.includes(this[i])) {
            continue;
        } else {
            arr.push(this[i]);
        }
    }
    console.log(arr);
}

// let arr = [1,2,2,3,3,3]
// arr.uniq();
// ([1,2,2,3,3,3]).uniq(); 

//=> [1,2,3]


// Array#twoSum - returns an array of position pairs where the elements sum to zero

Array.prototype.twoSum = function() {
    let zeroSums = [];
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
           if (this[i] + this[j] === 0) {
               zeroSums.push([i, j]);
           }
        }
    }
    console.log(zeroSums);
}

// let arr = [1, 2, 0, 4, -2, -4];
// arr.twoSum();
// ([1,2,0,4,-2,-4]).twoSum();

// Array#transpose - where we have a two - dimensional array representing a matrix.returns the transpose
// should not mutate the original array

Array.prototype.transpose = function() {
    let transposed = [];
    for (let m = 0; m < this.length; m++){
        transposed.push([]);
    }
    // debugger 
    for (let i = 0; i < this.length; i++) {
        // debugger
        for (let j = 0; j < this.length ; j++) {
            // debugger
            transposed[i].push(this[j][i]);
        }
    }
    console.log(transposed)
}

// let arr = [[1,2,3],
//            [4,5,6],
//            [7,8,9]];
// // [1,4]
// // []
// arr.transpose();