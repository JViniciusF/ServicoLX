const {AddConversation,GetAllConversationByAllUsers,GetAllConversationByUser,GetConversationById} = require('../Business/conversationBusiness');

const AddConversationController = async (req, res) => {
    let { 
        senderId,
        receiverId
    } = req.body;
    try {
        const conversation = await AddConversation(senderId,receiverId);

        if (!conversation) {
            return res.status(500).json({"error": `Não foi possível salvar a nova conversa ${error}`})
        }

        return res.json(conversation); 

    } catch (error) {
        return res.status(500).json({"error": `Não foi possível salvar a nova conversa ${error.obj}`})
    }
};

const GetAllConversationByUserController = async (req, res) => {
    let {userId} = req.body;

    try {
        const conversation = await GetAllConversationByUser(userId);
        if (!conversation) {
            return res.status(500).json({"error": `Ocorreu um erro ao resgatar as conversas ${error}`})
        }

        return res.json(conversation); 

    } catch (error) {
        return res.status(500).json({"error": `Ocorreu um erro ao resgatar as conversas ${error.obj}`})
    }
};

const GetAllConversationByAllUsersController = async (req, res) => {
    let { 
        userId,
        secondId
    } = req.body;

    try {
        const conversation = await GetAllConversationByAllUsers(userId,secondId);

        if (!conversation) {
            return res.status(500).json({"error": `Ocorreu um erro ao resgatar as conversas ${error}`})
        }

        return res.json(conversation); 

    } catch (error) {
        return res.status(500).json({"error": `Ocorreu um erro ao resgatar as conversas ${error.obj}`})
    }
};

const GetConversationByIdController = async (req, res) => {
    let { 
        id,
    } = req.body;
    try {
        const conversation = await GetConversationById(id);
        if (!conversation) {
            return res.status(500).json({"error": `Ocorreu um erro ao resgatar as conversas ${error}`})
        }

        return res.json(conversation); 

    } catch (error) {
        return res.status(500).json({"error": `Ocorreu um erro ao resgatar as conversas ${error.obj}`})
    }
};


module.exports= {AddConversationController,GetAllConversationByAllUsersController,GetAllConversationByUserController,GetConversationByIdController}
