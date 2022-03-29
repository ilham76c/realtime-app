const express = require('express');


const cors = require('cors');
const app = express();
app.use(cors());

app.options('*', cors());

app.get('/tes', (req, res, next) => {
    console.log('tes');
    res.end('tes');
});

const server = app.listen(3001, function() {
    console.log('server running on port 3001');
});


const io = require('socket.io')(server, {
    cors: {
        origin: "*",
    }
});

io.on('connection', function(socket) {
    console.log(socket.id)
    socket.on('SEND_MESSAGE', function(data) {
        console.log(data);
        io.emit('MESSAGE', data)
    });
});