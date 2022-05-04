const {GetAllMessagesByConversation,AddMessage} = require('../Business/messageBusiness');

const AddMessageController = async (req, res) => {
    let messageObj= req.body;
    try {
        const message = await AddMessage(messageObj);

        if (!message) {
            return res.status(500).json({"error": `Não foi possível salvar a nova mensagem ${error}`})
        }

        return res.json(message); 

    } catch (error) {
        return res.status(500).json({"error": `Não foi possível salvar a nova mensagem ${error.obj}`})
    }
};

const GetAllMessagesByConversationController = async (req, res) => {
    let {conversationId} = req.body;
    try {
        const message = await GetAllMessagesByConversation(conversationId);

        if (!message) {
            return res.status(500).json({"error": `Ocorreu um erro ao resgatar as mensagens ${error}`})
        }

        return res.json(message); 

    } catch (error) {
        return res.status(500).json({"error": `Ocorreu um erro ao resgatar as mensagens ${error.obj}`})
    }
};



module.exports= {AddMessageController,GetAllMessagesByConversationController}
