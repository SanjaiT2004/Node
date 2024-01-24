const http = require('node:http');
const { json } = require('stream/consumers');

const server = http.createServer((req, res) => {
   // res.writeHead(200) // http status code we can explore it //200 => request was successful
    res.writeHead(200, { 'Content-Type': 'application/json' })
    //The second parameter is an object containing key-value pairs representing the HTTP headers
    // you want to include in the ***response****. 
    //HTTP headers provide additional information about the response, 
    // such as the content type, cache settings, cookies, etc.
    const cricket = {
        Bat: 'Wooden',
        Ball : 'Kookaburra'
    }
    res.end(JSON.stringify(cricket));// we are setting the content type to appplication/json so that only we can send the object.
});
server.listen(3000, () => {
    console.log("server running on the 3000 port");
});