import { createServer } from "http";
import {
  ServerToClientEvents,
  ClientToServerEvents,
  InterServerEvents,
  SocketData,
} from "./types/Iio";
import { Server } from "socket.io";
const express = require("express");
const app = express();
const server = createServer(app);

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>(server, {
  cors: {
    origin: [
      "http://localhost:8000",
      "http://10.86.140.141:8000",
      "http://10.86.140.166:8000",
      "http://127.0.2.2:8000",
      "http://127.0.2.3:8000",
    ],
    credentials: true,
  },
});

app.get("/", (req: any, res: any) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connect", (socket) => {
  console.log(socket);
  
  const id = socket.handshake.auth.token;
  console.log("New client connected " + socket.id);

  // Receive message from client to server
  socket.on("sendDataClient", function (data) {    
    console.log(`Client ${id} sent \n`, data);
    if (id == 1) {
      socket.emit("sendDataServer", "1");
    }
  });

  // Send message from server to client
  // socket.emit("sendDataServer", { user: "test user", message: "some message" });

  socket.on("disconnect", () => {
    console.log("Client disconnected ", socket.id);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
