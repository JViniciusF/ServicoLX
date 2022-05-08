const router = require("express").Router();
const Message = require("../models/Message");

//add

const AddMessage = async(message) =>{
  try {
    const newMessage = await Message.create({
      conversationId: message.conversationId,
      sender: message.sender,
      text: message.text,
    });
    return newMessage;
  }catch (error) {
      throw { 
          msg: `error: Erro ao inserir no DB ${error}`,
          status:true,
          obj: error
      }
  }
}

const GetAllMessagesByConversation = async (conversation) =>{
  try {
    const messages = await Message.find({
      conversationId: conversation.id,
    });
    return messages;
  }catch (error) {
      throw { 
          msg: `error: Erro ao inserir no DB ${error}`,
          status:true,
          obj: error
      }
  }

}

module.exports = {GetAllMessagesByConversation,AddMessage}