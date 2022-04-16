const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  allowEIO3: true // false by default
});


const usersDB = require('../utils/users')();
const Message = require('../utils/message')();
const room = 'room-mekari';
const autoReplyMsg = ['/greet', '/list', '/date', '/help', 'Hi'];

function getGreet(num) {
  if ( 12 <= num && num < 18) return 'Selamat Siang';
  else if (num >= 18) return 'Selamat Malam';
  return 'Selamat Pagi';
};

io.on('connection', (socket) => {
  socket.on('createUser', (user) => {
    const newUser = {
      ...user,
      id: socket.id,
    };
    usersDB.addUser(newUser);
    socket.join(room);
    io.to(room).emit('updateUsers', usersDB.getUsers());
    socket.emit('newMessage', new Message('system', `Hello, ${newUser.name}`));
    socket.broadcast
      .to(room)
      .emit(
        'newMessage',
        new Message('system', `${newUser.name} connected`),
      );

    return { id: socket.id };
  });

  socket.on('deleteMessage', ({ msg }) => {
    // emit ke client lain kalau msg dengan konten msg ini tolong di delete di local
    io.to(room).emit('deleteMessage', msg);
  })

  socket.on('createMessage', ({ id, msg }) => {
    const user = usersDB.getUser(id);
    if (!user) return;
    if (autoReplyMsg.includes(msg)) {
      const now = new Date().toString();
      const adminTemplateMsg = {
        '/greet': `${getGreet(Number(now.slice(16, 18)))}, ${user.name}. Apa kabar ?`,
        '/list': `${usersDB.getUsers().map(x => `@${x.name}`)}`,
        '/date': now,
        '/help': '/greet, /list, /date',
        'Hi': 'Terima Kasih sudah menghubungi kami',
      };
      socket.emit('newMessage', new Message('admin', adminTemplateMsg[msg]));
    } else {
      io.to(room).emit('newMessage', new Message(user.name, msg, id));
    }
  });

  socket.on('createImage', ({ id, img }) => {
    const user = usersDB.getUser(id);
    if (user) io.to(room).emit('newMessage', new Message(user.name, img, id, 'image'));;
  });

  socket.on('createPdf', ({ id, pdf }) => {
    const user = usersDB.getUser(id);
    if (user) io.to(room).emit('newMessage', new Message(user.name, pdf, id, 'pdf'));;
  });

  socket.on('leaveRoom', () => {
    const id = socket.id;
    const user = usersDB.getUser(id);
    if (!user) return;
    usersDB.removeUser(id);
    socket.leave(room);
    io.to(room).emit('updateUsers', usersDB.getUsers());
    io.to(room).emit('newMessage', new Message('system', `User ${user.name} left chat`),);
  });
  
});

module.exports = {
  app,
  server,
};