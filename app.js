var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require("fs");

// include external data, eg. css, images (public folder)
app.use(express.static(__dirname + '/public'));

// By typing localhost:3000 the browser will load index.html
app.get('/', function (req, res) {
    res.redirect('/html/index.html'); // alternative: res.sendfile('./public/html/index.html');
});


// Put the application on port 3000
http.listen(3000, function () {
    console.log('listening on port 3000');
});

var currentColor = "000000";

io.on('connection', function (socket) {

    // Light Control
    socket.emit('updateCurrentColor', currentColor);
    socket.on('farbe_ClientToServer', function (data) {
        currentColor = data;
        io.emit('updateCurrentColor', currentColor);
    });
});