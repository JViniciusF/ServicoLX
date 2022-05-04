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

export async function registerUserByGoogle(params) {
    try {
        let response = await axios.post(`${apiUrl}account/loginByGoogle`, params)

        if (response.status !== 200)
            throw Error(response);

        return response.data;
    } catch(error) {
        console.log(`${error}`)
        return null;
    }
}

export async function loginUser(params) {
    try {
        let response = await axios.post(`${apiUrl}account/login`, params)

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
        let response = await axios.post(`${apiUrl}account/setNewLocation`, params)
        
        if (response.status !== 200)
            throw Error(response);
        
        return response.data;

    } catch(error) {
        console.log(`${error}`)
        return false;
    }
}

// export async function getUserChat(params) {
//     try {
//         let response = await axios.post(`${apiUrl}account/setNewLocation`, params)
        
//         if (response.status !== 200)
//             throw Error(response);
        
//         return response.data;

//     } catch(error) {
//         console.log(`${error}`)
//         return false;
//     }
// }
export async function getUserAccount(params){
    try {
        let response = await axios.post(`${apiUrl}account/getUserAccount`, params)
        
        if (response.status !== 200)
            throw Error(response);
        
        return response.data;

    } catch(error) {
        console.log(`${error}`)
        return false;
    }
    
  };

export default { registerUser, setNewLocation,loginUser,registerUserByGoogle,getUserAccount}