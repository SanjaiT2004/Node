const { isUtf8 } = require('node:buffer');
const fs = require('node:fs')
const http = require('node:http')
const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    // const html = fs.readFileSync('./htmlresponse.html', "Utf8")
    // res.end(html)
    // we can use the buffer for better memory usage
    fs.createReadStream('./htmlresponse.html').pipe(res)
})
server.listen(3000);