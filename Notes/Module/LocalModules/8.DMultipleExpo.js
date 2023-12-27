// //1.
// const addition = require('./7.MultipleExpo')
// console.log(addition(2, 6));
// //2.
// const add = require('./7.MultipleExpo')
// console.log(add(1, 3))
//3.
//1.
// const basic_oper = require('./7.MultipleExpo')// basic_oper is now object
// console.log(basic_oper.addition(2,3))
// console.log(basic_oper.subtraction(1, 3));
//2.
const oper = require('./7.MultipleExpo')
const { addition, subtraction } = oper; // destructure variables are always the export object keys
console.log(addition(2, 3))
console.log(subtraction(3, 1));
