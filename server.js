const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static('public'));

let canvasData = {};

io.on('connection', socket => {
    socket.emit('init', canvasData); //fk off the paint wall
    socket.on('pixelUpdate', ({ x, y, color }) => {
        canvasData[x + ',' + y] = color;
        io.emit('pixelUpdate', { x, y, color }); // dog bark to all clients（乐
    });
});

server.listen(3000, () => console.log('你妈勒（消失的戈壁）服务器正在端口3000运行'));