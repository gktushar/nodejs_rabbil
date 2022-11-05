const http = require("http");
const URL = require('url');

const PORT = 5050;

const server = http.createServer(function (req, res){
    const myURL = "http://ponnermela.live/category_sub?category=ElectricalElectronics&category_sub=IronGarmentSteamers";
    const myURLOBJ = URL.parse(myURL, true);
    const myHostName = myURLOBJ.host;
    const myPathName = myURLOBJ.pathname;
    const mySearchName = myURLOBJ.search;

    res.writeHead(200, {'Conten-Type':'text/html'})
    res.write(myHostName);
    res.write(myPathName);
    res.write(mySearchName);
    res.end();

});

server.listen(PORT);
console.log("Server is running successfully for URL tutorial");
