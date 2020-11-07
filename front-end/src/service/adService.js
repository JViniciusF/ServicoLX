import axios from 'axios';

import getEnvVars from '../../environment';

const { apiUrl } = getEnvVars();

export async function getAllAdsPaginated() {
    try {
        let response = await axios.get(`${apiUrl}service/getAllAdsPaginated`)

        if (response.status !== 200)
            throw Error(response);

        return response.data;
    } catch(error) {
        console.log(`${error}`)
        return null;
    }
}

export async function getAdsByFilterPaginated(filter) {
    try {
        let response = await axios.post(`${apiUrl}service/getAdsByFilterPaginated`, {filter})

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

export async function getAdsByCategoryPaginated(filter) {
    try {
        let response = await axios.post(`${apiUrl}service/getAdsByCategoryPaginated`, {filter})

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

export async function getAllAdsByUserPaginated(params) {
    try {
        let response = await axios.post(`${apiUrl}service/getAllAdsByUserPaginated`, params)
        
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

export async function getAdsByUserAndFilterPaginated(params) {
    try {
        let response = await axios.post(`${apiUrl}service/getAdsByUserAndFilterPaginated`, params)
        console.log('response', response)
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

export async function favoriteService(params) {
    try {
        let response = await axios.post(`${apiUrl}service/setFavorite`, params)
        
        if (response.status !== 200)
            throw Error(response);

        if (response.data)
            return response.data;
        else
            return false;

    } catch(error) {
        console.log(`${error}`)
        return false;
    }
}

export async function retrieveFavorite(params) {
    try {
        let response = await axios.post(`${apiUrl}service/retrieveFavorite`, params)
        
        if (response.status !== 200)
            throw Error(response);

        if (response.data)
            return response.data;
        else
            return false;

    } catch(error) {
        console.log(`${error}`)
        return false;
    }
}


export default { 
    getAllAdsPaginated,
    getAdsByCategoryPaginated,
    saveNewAd,
    getAdsByFilterPaginated,
    getAllAdsByUserPaginated,
    getAdsByUserAndFilterPaginated,
    favoriteService,
    retrieveFavorite
}