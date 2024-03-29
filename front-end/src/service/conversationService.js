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

export async function GetAllConversationByAllUsersService(params) {
    try {
        let response = await axios.post(`${apiUrl}conversation/getAllConversationByAllUsers`, params)

        if (response.status !== 200)
            throw Error(response);

        return response.data;
    } catch(error) {
        console.log(`${error}`)
        return null;
    }
}

export async function GetConversationByIdService(id) {
    try {
        let response = await axios.post(`${apiUrl}conversation/getById`, id)

        if (response.status !== 200)
            throw Error(response);

        return response.data;
    } catch(error) {
        console.log(`${error}`)
        return null;
    }
}

export default { 
    getAllConversationsByUserService,AddConversationService,GetAllConversationByAllUsersService,GetConversationByIdService
}