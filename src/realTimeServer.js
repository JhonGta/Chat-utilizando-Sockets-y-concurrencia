const cookie = require("cookie");

module.exports = (httpServer) => {
  const { Server } = require("socket.io");
  const io = new Server(httpServer);

  const users = {}; // socket.id -> username

  io.on("connection", (socket) => {
    const cookies = socket.handshake.headers.cookie || "";
    const parsed = cookie.parse(cookies);
    const user = parsed.username || `Usuario-${socket.id.slice(0, 4)}`;

    users[socket.id] = user;
    console.log(`${user} se ha conectado`);
    io.emit("users", Object.values(users));

    socket.on("message", (message) => {
      io.emit("message", {
        user,
        message,
      });
    });

    socket.on("disconnect", () => {
      console.log(`${users[socket.id]} se ha desconectado`);
      delete users[socket.id];
      io.emit("users", Object.values(users));
    });

socket.on("typing", () => {
  socket.broadcast.emit("userTyping", users[socket.id]);
});

socket.on("stopTyping", () => {
  socket.broadcast.emit("userStopTyping");
});


  });

  
};
