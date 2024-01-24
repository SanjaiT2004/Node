const { log } = require("console");
const buffer = new Buffer.from('sanjai')
console.log(buffer.toString());//it returns the string which we gave in buffer
buffer.write('hello');//if new string length is less than old string length then it overwrites
//else it overwrites old string length
console.log(buffer.toString());
buffer.write('helloworld');
console.log(buffer.toString());
console.log(buffer); // it returns hexadecimal value of each character
console.log(buffer.toJSON())//it returns ascii value for each character