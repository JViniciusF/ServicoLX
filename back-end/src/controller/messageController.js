const {GetAllMessagesByConversation,AddMessage} = require('../Business/messageBusiness');

const AddMessageController = async (req, res) => {
    let {message}= req.body;
    try {
        const newMessage = await AddMessage(message);

        if (!newMessage) {
            return res.status(500).json({"error": `Não foi possível salvar a nova mensagem ${error}`})
        }

        return res.json(newMessage); 

    } catch (error) {
        return res.status(500).json({"error": `Não foi possível salvar a nova mensagem ${error.obj}`})
    }
};

const GetAllMessagesByConversationController = async (req, res) => {
    let conversation = req.body;
    try {
        const message = await GetAllMessagesByConversation(conversation);
        if (!message) {
            return res.status(500).json({"error": `Ocorreu um erro ao resgatar as mensagens ${error}`})
        }

        return res.json(message); 

    } catch (error) {
        return res.status(500).json({"error": `Ocorreu um erro ao resgatar as mensagens ${error.obj}`})
    }
};



module.exports= {AddMessageController,GetAllMessagesByConversationController}
