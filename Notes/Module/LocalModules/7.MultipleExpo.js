// //1.
// const add = (a, b) => {
//     return a + b;
// }
// module.exports = add;

// //2.
// module.exports = (a, b) => {
//     return a + b;
// }
//3.
const addition = (a, b) => {
    return a + b;
}
const subtraction = (a, b) => {
    return a - b;
}
module.exports = {
    addition : addition,
    subtraction: subtraction
    //you can simple code addition,subtraction because both key and value are same name
}
//4.
//if you dont export below you can export like
// module.exports.add = (a, b) => {
//     return a + b;
// }
// if you export multiple variables like these import acts as an object you can destructure it also. 