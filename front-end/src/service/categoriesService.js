import axios from 'axios';

import getEnvVars from '../../environment';


const { apiUrl } = getEnvVars();

export async function getAllCategories(params) {
    try {
        let response = await axios.get(`${apiUrl}category/getAll`, params)

        if (response.status !== 200)
            throw Error(response);

        return response.data;
        
    } catch (error) {
        console.log(`${error}`)
        return null;
    }
}

export default { getAllCategories }