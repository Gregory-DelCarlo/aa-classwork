//Greg, I did some of these earlier ones that you might find really easy, but I still need to work on them. I stopped at the myBind with calltime and bindtime args. 


Function.prototype.myBind = function (context, ...bindArgs) {
  const that = this;
  return function (...callArgs) {
    return that.apply(context, bindArgs.concat(callArgs));
  };
};

// arguments way 
// function sum(){
//   let args = Array.prototype.slice.call(arguments);

//   args.forEach((arg) => {
//     console.log(arg);
//   });
// }

//reducer callback to pass to reduce method
// let reducer = (accumulator, currentValue) => accumulator + currentValue;
// rest way
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

