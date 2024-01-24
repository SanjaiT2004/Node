const { isUtf8 } = require('node:buffer');
const fs = require('node:fs');
fs.writeFile('./text.txt', 'Hello Sanjai!', (error) => {
    if (error) {
        console.log('error occured'); return;
    }
});//asynchronous file writer or file reader always require last parameter as callback function 
const fc = fs.readFileSync('./text.txt', 'utf-8')
console.log(fc);
fs.writeFile('./text.txt', ' You are learning', { flag: 'a' }, (error) => {
    if (error) {
        return;
    }
});//flag is used write at the end of the file or append at last
const fcs = fs.readFileSync('./text.txt', 'utf-8')//utf-8 is used human readable 
// if we didnt give it will give hexadecimal value
console.log(fcs);
