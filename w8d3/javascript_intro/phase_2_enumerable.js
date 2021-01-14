Array.prototype.myEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
}

// let arr1 = [];
// block being called by myEach
let myfunc1 = function(num) {
    // for (let i =0; i < arr.length; i++) {
    return num * 2;
    // }
}

// arr.each do => call to myEach
// |ele|        => this[i] or myfunc = function(num)
// print("hello") => arr1.push(num*2)
// end

Array.prototype.myMap = function(cb1) {
    let newarr = [];
    this.myEach(function(num) {
        newarr.push(cb1(num));    
    }
    )
    return newarr;
}
    
    
let arr = [1,2,3,4];
console.log(arr.myMap(myfunc1));
// arr.myEach( function(num) { console.log(num) } )
    
    