import axios from 'axios';

import getEnvVars from '../../environment';

const { apiUrl } = getEnvVars();

export async function getAllConversationsByUserService(params) {
    try {
        let response = await axios.post(`${apiUrl}conversation/getAllConversationByUser`,params)
        if (response.status !== 200)
            throw Error(response);
        return response.data;
    } catch(error) {
        console.log(`${error}`)
        return null;
    }
}

export async function AddConversationService(senderId,receiverId) {
    try {
        let response = await axios.post(`${apiUrl}conversation/new`, {senderId,receiverId})

        if (response.status !== 200)
            throw Error(response);

        return response.data;
    } catch(error) {
        console.log(`${error}`)
        return null;
    }
}

export async function GetAllConversationByAllUsersService(userId,secondId) {
    try {
        let response = await axios.get(`${apiUrl}conversation/getAllByAllUsers`, {userId,secondId})

        if (response.status !== 200)
            throw Error(response);

        return response.data;
    } catch(error) {
        console.log(`${error}`)
        return null;
    }
}

export default { 
    getAllConversationsByUserService,AddConversationService,GetAllConversationByAllUsersService
}