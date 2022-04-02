const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  allowEIO3: true // false by default
});

const usersDB = require('../utils/users')();
const Message = require('../utils/message')();
const room = 'room-mekari';

io.on('connection', (socket) => {
  socket.on('createUser', (user) => {
    const newUser = {
      ...user,
      id: socket.id,
    };
    usersDB.addUser(newUser);
    io.emit('addUser', newUser)
    socket.join(room);
    io.to(room).emit('updateUsers', newUser);
    socket.emit('newMessage', new Message('admin', `Hello, ${newUser.name}`));
    socket.broadcast
      .to(room)
      .emit(
        'newMessage',
        new Message('admin', `User ${newUser.name} connected to chat`),
      );
  });

  socket.on('createMessage', ({ id, msg }) => {
    const user = usersDB.getUser(id);
    if (user) {
      io.to(room).emit('newMessage', new Message(user.name, msg, id));
    }
  });

  
});

module.exports = {
  app,
  server,
};