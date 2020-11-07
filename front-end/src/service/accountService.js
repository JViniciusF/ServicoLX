import axios from 'axios';

import getEnvVars from '../../environment';

const { apiUrl } = getEnvVars();

export async function registerUser(params) {
    try {
        let response = await axios.post(`${apiUrl}account/register`, params)

        if (response.status !== 200)
            throw Error(response);

        return response.data;
    } catch(error) {
        console.log(`${error}`)
        return null;
    }
}

export async function setNewLocation(params) {
    try {
        console.log('Entrei aqui')
        let response = await axios.post(`${apiUrl}account/setNewLocation`, params)
        
        if (response.status !== 200)
            throw Error(response);
        
        return response.data;

    } catch(error) {
        console.log(`${error}`)
        return false;
    }
}

export default { registerUser, setNewLocation }