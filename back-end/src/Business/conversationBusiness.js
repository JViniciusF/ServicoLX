const router = require("express").Router();
const Conversation = require("../models/Conversation");

//new conv

const AddConversation = async (senderId,receiverId) =>{
  try {
    const newConversation = await Conversation.create({
        members: [senderId, receiverId],
    });
    return newConversation;
  } catch (error) {
    throw { 
        msg: `error: Erro ao inserir no DB ${error}`,
        status:true,
        obj: error
    }
  }
}

const GetAllConversationByUser = async (userId) =>{
  try {
    const conversation = await Conversation.find({
      members: { $in: [userId] },
    });
    return conversation;
  } catch (error) {
    throw { 
        msg: `error: Erro ao inserir no DB ${error}`,
        status:true,
        obj: error
    }
  }
}

// get conv includes two userId
const GetAllConversationByAllUsers = async (firstUserId,secondUserId)=>{
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [firstUserId,secondUserId] },
    });
    return conversation
  } catch (error) {
    throw { 
        msg: `error: Erro ao inserir no DB ${error}`,
        status:true,
        obj: error
    }
  }
};

const GetConversationById = async (conversationId)=>{
  try {
    const conversation = await Conversation.findOne({
      id: conversationId,
    });
    return conversation
  } catch (error) {
    throw { 
        msg: `error: Erro ao inserir no DB ${error}`,
        status:true,
        obj: error
    }
  }
} 

module.exports = {AddConversation,GetAllConversationByUser,GetAllConversationByAllUsers,GetConversationById};