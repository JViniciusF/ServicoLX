const env = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}${process.env.MONGO_DATA_BASE}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)
app.use(express.json({limit: '50mb'}));
app.use(routes);

app.listen(3333);

const io = require("socket.io")(8900, {
    cors: {
      origin: "http://localhost:3333",
    },
  });
  
  let users = [];
  
  
  io.on("connection", (socket) => {
    socket.on("addUser", (conversationId) => {
      socket.join(conversationId)
    });

    socket.on("sendMessage", ({message,conversationId}) => {
      try{
        socket.to(conversationId).emit("getMessage", {
          message
        });
        
      }catch (e){
        console.log(e)
      }
    });
  
    //when disconnect
    
  });
