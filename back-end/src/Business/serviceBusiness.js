const Service = require('../models/Service')

const GetAllServices = async () => {
    try {
        let ads = await Service.find({});

        if (!ads) {
            throw { 
                msg: `error: Não foram encontrados Ads`,
                status: true
            }
        }
    } catch (error) {
        throw { 
            msg: `error: Erro ao executar a query no DB ${error}`,
            status: true,
            obj: error
        }
    }
}

const GetServicesByFilter = async (filter) => {
    try {
        let ads = await Service.find({"name": {"$regex": `${filter}`, "$options" : 'i'}});
        if (!ads) {
            throw { 
                msg: `error: Não foram encontrados Ads com o filtro ${filter}`,
                status: true
            }
        }
    } catch (error) {
        throw { 
            msg: `error: Erro ao executar a query no DB ${error}`,
            status: true,
            obj: error
        }
    }
}

const GetServicesByCategory = async (filter) => {
    try {
        let ads = await Service.find({"category": {"$in": `${filter}`}});
        if (!ads) {
            throw { 
                msg: `error: Não foram encontrados Ads com o filtro ${filter}`,
                status: true
            }
        }
    } catch (error) {
        throw { 
            msg: `error: Erro ao executar a query no DB ${error}`,
            status: true,
            obj: error
        }
    }
}

const CreateService = async (userObj, name, description, images, categoryObj, value) => {
    try {
        return await Service.create({
            owner: userObj,
            name,
            description,
            images,
            category: [ categoryObj ],
            value,
        })
        
    } catch (error) {
        throw { 
            msg: `error: Erro ao executar a query no DB ${error}`,
            status: true,
            obj: error
        }
    }
 }


module.exports = { GetAllServices, GetServicesByFilter, GetServicesByCategory, CreateService }