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

let arr = [1,2,2,3,3,3]
arr.uniq();
([1,2,2,3,3,3]).uniq(); 

//=> [1,2,3]

