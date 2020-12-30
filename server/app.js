const { clear } = require("console");
const express = require("express");
const app = express();
const http = require("http").createServer(app);

app.use(express.static("./public"));
const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.resolve("./public", "index.html"));
});

http.listen(process.env.PORT || 3000, () => {
  console.log("listening on *:3000");
});

const Game = require("./Game");
const io = require("socket.io")(http, { pingInterval: 1000 });

const GameS = {};
const GameInterval = {};
function getGames() {
  let data = [];
  for (let id in GameS) {
    // if (!GameS[id].canJoin) continue;
    let playersCount = Object.keys(GameS[id].players).length;
    data.push({
      id,
      name: GameS[id].name,
      playersCount,
      canJoin: GameS[id].canJoin,
    });
  }
  return data;
}

io.on("connection", (socket) => {
  console.log(socket.id, "join");
  socket.on("createRoom", createRoom);
  socket.on("joinRoom", joinRoom);
  socket.on("setUsername", (username) => {
    socket.username = username;
  });
  socket.on("playerReady", playerReady);
  socket.on("playerAnswer", playerAnswer);

  socket.on("leaveRoom", leaveRoom);
  socket.on("disconnect", leaveRoom);
  socket.on("disconnect", (e) => {
    console.log(socket.id, "leave");
  });
});

setInterval(() => {
  io.emit("rooms", getGames());
}, 1000);
function playerAnswer({ questionID, choose }) {
  if (!this.game) return;
  this.game.playerAnswer({ id: this.id, questionID, choose });
}
function playerReady() {
  if (!this.game) return;
  this.game.playerReady(this.id);
}
function leaveRoom() {
  if (this.game) {
    this.leave(this.game.id);
    this.game.playerLeave(this.id);
    let playersCount = Object.keys(this.game.players).length;
    if (playersCount == 0) {
      clearInterval(GameInterval[this.game.id]);
      delete GameS[this.game.id];
    }
    delete this.game;
  }
}
function createRoom(name) {
  if (this.game) return;
  let gameId = "game_" + this.id;
  let game = new Game({ id: gameId, name });
  game.playerJoin({ id: this.id, username: this.username });
  this.join(gameId);
  let temp = logger();
  GameInterval[gameId] = setInterval(() => {
    temp(game);
  }, 100);
  GameS[gameId] = game;
  this.game = game;
}
function joinRoom(roomID) {
  if (this.game || !GameS[roomID] || (GameS[roomID] && !GameS[roomID].canJoin))
    return;
  this.game = GameS[roomID];
  this.join(this.game.id);
  this.game.playerJoin({ id: this.id, username: this.username });
}

function logger() {
  let temp;
  return (e) => {
    if (!temp) temp = e.getInfomation();
    let temp2 = e.getInfomation();
    // let log = {};
    // for (let key in temp2) {
    //   if (JSON.stringify(temp2[key]) == JSON.stringify(temp[key])) continue;
    //   log[key] = temp2[key];
    // }
    // temp = temp2;
    // if (Object.keys(log).length > 0) io.to(e.id).emit("gameData", log);
    io.to(e.id).emit("gameData", temp2);
  };
}
