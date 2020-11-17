import axios from 'axios';

import getEnvVars from '../../environment';

const { apiUrl } = getEnvVars();

export async function getAllAdsPaginated(filtroPreco='Preço', filtroReputacao='Reputação', filtroCotado='Cotado') {
    try {
        let response = await axios.post(`${apiUrl}service/getAllAdsPaginated`, {filtroPreco, filtroReputacao, filtroCotado})

        if (response.status !== 200)
            throw Error(response);

        return response.data;
    } catch(error) {
        console.log(`${error}`)
        return null;
    }
}

export async function getAdsByFilterPaginated(filter, filtroPreco='Preço', filtroReputacao='Reputação', filtroCotado='Cotado') {
    try {
        let response = await axios.post(`${apiUrl}service/getAdsByFilterPaginated`, {filter, filtroPreco, filtroReputacao, filtroCotado})

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

export async function getAllAdsByCategoryPaginated(filter, filtroPreco='Preço', filtroReputacao='Reputação', filtroCotado='Cotado') {
    try {
        let response = await axios.post(`${apiUrl}service/getAdsByCategoryPaginated`, {filter, filtroPreco, filtroReputacao, filtroCotado})

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

export async function getAdsByCategoryAndFilterPaginated(filter, value, filtroPreco='Preço', filtroReputacao='Reputação', filtroCotado='Cotado') {
    try {
        let response = await axios.post(`${apiUrl}service/getAdsByCategoryAndFilterPaginated`, {filter, value, filtroPreco, filtroReputacao, filtroCotado})

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

export async function incrementHiredService(params) {
    try {
        let response = await axios.post(`${apiUrl}service/incrementHiredService`, params)
        
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

export async function incrementRatingService(params) {
    try {
        let response = await axios.post(`${apiUrl}service/incrementRatingService`, params)
        
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
    getAllAdsByCategoryPaginated,
    getAdsByCategoryAndFilterPaginated,
    saveNewAd,
    getAdsByFilterPaginated,
    getAllAdsByUserPaginated,
    getAdsByUserAndFilterPaginated,
    favoriteService,
    retrieveFavorite,
    incrementHiredService,
    incrementRatingService
}