var express = require('express');
var http = require('http');

var app = express();

app.use(express.static('html'));


var server = http.createServer(app);
server.listen(3300, function() {
  console.log("Node server running on http://localhost:3300");
});
