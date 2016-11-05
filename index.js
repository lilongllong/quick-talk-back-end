const express = require("express");
const app = express();

const server = require("http").Server(app);
const SocketServer = require("./lib/MessageInterface");
SocketServer.bindSocketIO(server);

server.listen(8080);
// back-end test 
app.use(express.static("./test"));
