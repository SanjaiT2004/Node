const fs = require('node:fs')
const readableStream = fs.createReadStream('./text.txt', { encoding: "utf-8",highWaterMark:5 });//remove the highWaterMark to write the full content.
//second parameter encoding utf8 is used to get the data from file in the form of characters
//if (encoding utf8) it is not in that it will give you a hexa decimal values because buffer gives you hexa decimal values
// we can set the buffer size (in bytes) by using highWaterMark property accepts a number  it is like you tube loader 
//parameter  inside the readstream should be source address
const writeableStream = fs.createWriteStream("./text1.txt")
//parameter  inside the readstream should be destination address

// readableStream.on('data', (chunk) => {
//     console.log(chunk);
//     writeableStream.write(chunk)
// })
//readablestream.on why because createreadStream is extended the events class.
// we can also done by using pipe method instead of creating data event 
readableStream.pipe(writeableStream)// comment this when u are using the 10th line