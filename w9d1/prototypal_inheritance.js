// When doing inheritance you must either use ES6 or ES5 for BOTH object definition and inheritance.
// You can use the ES5 version of defining instance methods to add more methods to an ES6 defined object.



function Parent(name){
    this.name = name; 

};

Parent.prototype.sayHi = function() {
    console.log(`${this.name} says hi`)
};

function Child (name){
        this.name = name;
};

// function Surrogate(){};
// Surrogate.prototype = Parent.prototype;
// Child.prototype = new Surrogate();
// Child.prototype.constructor = Child;


// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         console.log(`${this.name} says hi`)
//     };
// }

// Person.prototype.sayBye = function() {
//     console.log(`${this.name} says Bye!`);
// };

Function.prototype.inherits = function(Mom){
  let that = this;

  that.prototype = Object.create(Mom.prototype);
  // function Surrogate(){};
  // Surrogate.prototype = Mom.prototype;
  // that.prototype = new Surrogate();
  that.prototype.constructor = that;
}

Child.inherits(Parent);





