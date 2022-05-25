const router = require("express").Router();
const Message = require("../models/Message");
const {AddConversation} = require("./conversationBusiness");

//add

const AddMessage = async(message) =>{
  try {
    let conversationId = message.conversationId
    if (message.conversationId === undefined){
        let conversation = AddConversation(message.user._id,message.secondId)
        conversationId = conversation._id
    }
    const newMessage = await Message.create({
      conversationId: conversationId,
      user: message.user,
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