// arguments way
// function sum(cb){
//   let args = Array.prototype.slice.call(arguments);
//   args.shift();
//   let sum = args.reduce(cb);
//   // args.forEach((arg) => {
//   //   console.log(arg);
//   //   sum += arg
//   // });
//  return sum;
// }

// reducer callback to pass to reduce method
// let reducer = (accumulator, currentValue) => accumulator + currentValue;
// // rest way
// function sum(cb, operOne,...otherOpers) {

//   console.log("operOne: " + operOne);
//   otherOpers.forEach((arg) => {
//     console.log("otherOpers: " + arg);
//   });
//   //add operOne to other args for addition
//   otherOpers.unshift(operOne);
//   //sum using callback
//   return otherOpers.reduce(cb);
// }

// console.log(sum(reducer,1,2,3,4,5,6,7,8,9,10));



// Function.prototype.myBind = function (context, ...bindArgs) {
//   const that = this;
//   return function (...callArgs) {
//     return that.apply(context, bindArgs.concat(callArgs));
//   };
// };




Function.prototype.myBind = function(context) {
  const that = this;
  let args = Array.prototype.slice.call(arguments);
  args.shift();
  return function() {
    let callArgs = Array.prototype.slice.call(arguments);
    return that.apply(context, args.concat(callArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }

  _addFood (food1, food2) {
    console.log(`You made a ${food1} ${food2}`)
  }
}


class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Human {
  constructor(name) {
    this.name = name;
    this.occupation = "unemployed";
  }

  destroy(thing) {
    console.log(`${this.name} destroys ${thing} becuase ${this.occupation}`)
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");
const Joe = new Human("Joe");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

markov._addFood("tuna", "salad");
markov._addFood.myBind(Joe, "pizza")("pie");

markov.says.myBind(Joe)("yells", "George");
// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true

//the code from exercise page...
//non-curried
function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!

Function.prototype.myCurry = function (numArgs) {
  let nums = [];
  let fcn = this;
  return function _myCurry(el) {
    nums.push(el);
    if (nums.length < numArgs) {
      return _myCurry;
    } else {
      return fcn(...nums);
    }
  };
};

let f1 = sumThree.myCurry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30
console.log("f1: " + f1);

function curriedSum(numArgs){
  let nums = [];

  return _curry = (ellie) => {
    nums.push(ellie);
    if(numArgs === nums.length){
      return nums.reduce((a, b) => a + b, 0);  
    }else {
      
      return _curry;
    }
  }
}


// or more briefly:
console.log(curriedSum(3)(4)(20)(6)); // == 30

