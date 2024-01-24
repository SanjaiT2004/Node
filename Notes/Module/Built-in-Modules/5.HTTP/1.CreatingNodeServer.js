const http = require('node:http')

const server = http.createServer((req, res) => {
   // res.writeHead(200) // http status code we can explore it //200 => request was successful
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    //The second parameter is an object containing key-value pairs representing the HTTP headers
    // you want to include in the ***response****. 
    //HTTP headers provide additional information about the response, 
    // such as the content type, cache settings, cookies, etc.
    res.end("Sanjai's Server");
});
server.listen(3000, () => {
    console.log("server running on the 3000 port");
});