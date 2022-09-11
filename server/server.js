import http from 'http';
import { Server } from 'socket.io';
import app from './app.js';

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://127.0.0.1:5173',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  socket.on('joinRoom', (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on('sendMessage', (data) => {
    console.log(data);
    socket.to(data.room).emit('recieveMessage', data);
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected', socket.id);
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server is running at port: ${process.env.PORT}`);
});
