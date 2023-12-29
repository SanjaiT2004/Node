// if we want to use the built in modules we need to import it first;
//We will see 5 built in modules
//Path
//events
//fs
//stream
//http
//Path module has 14 different properties and methods  **we will use only 7.
//documentation link : https://nodejs.org/docs/latest/api/path.html
const { log } = require("node:console");// we can give simply node in the require method
const path = require("node:path")
console.log(__filename);
console.log(__dirname);
console.log(path.basename(__filename)) // return end name of the path file 
console.log(path.basename(__dirname)); // return end name of the path directory
console.log(path.extname(__filename)); // return the type of file 
console.log(path.extname(__dirname)); //It doesn't return anything
console.log(path.parse(__filename));//It return object
console.log(path.format(path.parse(__filename))); // it forms the path by grouping the parsed path
console.log(path.isAbsolute(__filename))// return true if it has all the things in path
console.log(path.isAbsolute('./empty'));  
console.log(path.join("/folder1", "folder2", "folder3"));//it accepts strings as arguments returns the path


