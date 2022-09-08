const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => res.send('Hello Chat!'));

io.on('connection', (socket) => {
    console.log('Some user is connected');
});

http.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});
