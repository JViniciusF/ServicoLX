import axios from 'axios';

import getEnvVars from '../../environment';

const { apiUrl } = getEnvVars();


export async function getAllCategories() {
    try {
        let response = await axios.get(`${apiUrl}category/getAll`)
        
        if (response.status !== 200)
            throw Error(response);
        
        if (!response.data)
            return []
        
        return response.data;
    } catch (error) {
        console.log(`${error}`)
        return null;
    }
}

export async function getAllCategoriesPaginated() {
    try {
        let response = await axios.get(`${apiUrl}category/getAllPaginated`)
        
        if (response.status !== 200)
            throw Error(response);

        return response.data;
        
    } catch (error) {
        console.log(`${error}`)
        return null;
    }
}

export default { getAllCategoriesPaginated, getAllCategories }