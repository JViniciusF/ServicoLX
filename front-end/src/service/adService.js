import axios from 'axios';

import getEnvVars from '../../environment';

const { apiUrl } = getEnvVars();

export async function getAllAds() {
    try {
        let response = await axios.get(`${apiUrl}account/register`)

        if (response.status !== 200)
            throw Error(response);

        return response.data;
    } catch(error) {
        console.log(`${error}`)
        return null;
    }
}

export async function getAdsByFilter(filter) {
    try {
        let response = await axios.post(`${apiUrl}service/getAdsByFilter`, {filter})

        if (response.status !== 200)
            throw Error(response);

        if (response.data)
            return response.data;
        else
            return [];

    } catch(error) {
        console.log(`${error}`)
        return [];
    }
}

export async function getAdsByCategory(filter) {
    try {
        let response = await axios.post(`${apiUrl}service/getAdsByCategory`, {filter})

        if (response.status !== 200)
            throw Error(response);


        if (response.data)
            return response.data;
        else
            return [];

    } catch(error) {
        console.log(`${error}`)
        return [];
    }
}

export async function saveNewAd(params) {
    try {
        let response = await axios.post(`${apiUrl}service/createService`, params)
        
        if (response.status !== 200)
            throw Error(response);

        if (response.data)
            return response.data;
        else
            return null;

    } catch(error) {
        console.log(`${error}`)
        return [];
    }
}

export default { getAllAds, getAdsByCategory, saveNewAd}