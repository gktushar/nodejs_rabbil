const http = require("http");

const PORT = 5050;

const server = http.createServer(function (req, res){
    if (req.url=="/") {
        res.writeHead(200, {'Conten-Type':'text/html'})
        res.write('This is Home Page')
        res.end();
    }
    else if (req.url=="/about") {
        res.writeHead(200, {'Conten-Type':'text/html'})
        res.write('This is About Page')
        res.end();
    }
    else if (req.url=="/contact") {
        res.writeHead(200, {'Conten-Type':'text/html'})
        res.write('This is Contact Page')
        res.end();
    }
    else {
        res.writeHead(404, {'Conten-Type':'text/html'})
        res.write('This is 404 Error Page')
        res.end();
    }
});

server.listen(PORT);
console.log("Server is running successfully for http tutorial");
