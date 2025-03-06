const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;
    if (query) console.log(query);

    switch (req.url) {
        case "/": {
            res.writeHead(200, { "content-type": "text/html" });
            const readStream = fs.createReadStream("./static/index.html");
            readStream.pipe(res);
            return;
        }
        case "/about": {
            res.writeHead(200, { "content-type": "text/html" });
            const readStream = fs.createReadStream("./static/about.html");
            readStream.pipe(res);
            return;
        }
        default: {
            res.write("<h1>404 Page not found</h1>");
            res.end();
            return;
        }
    }
});

server.listen(3000);
