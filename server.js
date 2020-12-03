const io = require('socket.io')(3000)

const users = {}

var connections = 0;

io.on('connection', socket => {
    socket.on('new-user', name => {
        users[socket.id] = name
        socket.broadcast.emit('user-connected', name)
        connections++;
        if (connections == 1) {
            socket.broadcast.emit('en-host', name)
        }
        console.log(connections);
    })
    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] })
    })
    socket.on('kigyohely', message => {
        socket.broadcast.emit('kigyo-message', { message: message, name: users[socket.id] })
    })
    socket.on('vege', message => {
        socket.broadcast.emit('vege-broadcast', { message: message, name: users[socket.id] })
    })
    socket.on('bombaspawn', message => {
        socket.broadcast.emit('bomba-spawn', { message: message, name: users[socket.id] })
    })
    socket.on('bombaremove', message => {
        socket.broadcast.emit('bomba-remove', { message: message, name: users[socket.id] })
    })
    socket.on('almaspawn', message => {
        socket.broadcast.emit('alma-spawn', { message: message, name: users[socket.id] })
    })
    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id])
        connections--;
        delete users[socket.id]
    })
})