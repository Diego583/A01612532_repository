const http = require('http');
var fs = require('fs');
const boxeadores = ["Canelo", "Terrence", "Inoue", "Teófimo"];

const requestHandler = require('./routes');
const server = http.createServer(requestHandler);

server.listen(3000);
