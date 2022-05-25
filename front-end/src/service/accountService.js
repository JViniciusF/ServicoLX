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

export async function getGoogleAccountInfo(accessToken){
    if (accessToken){
        const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo`,{
            method:'GET',
            headers:{
                Accept:'application/json',
                Authorization:`Bearer ${accessToken}`,
                'Content-Type':'application/json',
                Connection:'keep-alive'
            },
        })

        return await response.json();
    }
}

export default { registerUser, setNewLocation,loginUser,registerUserByGoogle,getUserAccount,getGoogleAccountInfo}