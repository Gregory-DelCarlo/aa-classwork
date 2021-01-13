Array.prototype.myEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
}

let arr1 = [];
// block being called by myEach
let myfunc = function(num) {
    // for (let i =0; i < arr.length; i++) {
    arr1.push(num*2);
    // }
}

let arr = [1,2,3,4];
arr.myEach(myfunc);
arr.myEach( function(num) { console.log(num) } )
// arr.each do => call to myEach
// |ele|        => this[i] or myfunc = function(num)
// print("hello") => arr1.push(num*2)
// end