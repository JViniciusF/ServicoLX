import axios from 'axios';

import getEnvVars from '../../environment';

const { apiUrl } = getEnvVars();

export async function GetAllMessagesByConversationService(conversationId) {
    try {
        let response = await axios.post(`${apiUrl}message/getAllMessageByConversation`, conversationId)

        if (response.status !== 200)
            throw Error(response);

        return response.data;
    } catch(error) {
        console.log(`${error}`)
        return null;
    }
}

export async function AddMessageService(message) {
    try {
        let response = await axios.post(`${apiUrl}message/new`, {message})
        if (response.status !== 200)
            throw Error(response);

        return response.data;
    } catch(error) {
        console.log(`${error}`)
        return null;
    }
}

export default { 
    AddMessageService,GetAllMessagesByConversationService
}

