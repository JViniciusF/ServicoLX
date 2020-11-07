const Account = require('../models/Account');
const Service = require('../models/Service')
var ObjectId = require('mongoose').Types.ObjectId;

const GetAllServices = async () => {
    try {
        let ads = await Service.find({}).populate('category').populate('owner');

        if (!ads) {
            throw { 
                msg: `error: Não foram encontrados Ads`,
                status: true
            }
        }
        return ads;
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
        let ads = await Service.find({"name": {"$regex": `${filter}`, "$options" : 'i'}}).populate('category').populate('owner');
        if (!ads) {
            throw { 
                msg: `error: Não foram encontrados Ads com o filtro ${filter}`,
                status: true
            }
        }
        return ads
    } catch (error) {
        throw { 
            msg: `error: Erro ao executar a query no DB ${error}`,
            status: true,
            obj: error
        }
    }
}

const GetServicesByCategoryPaginated = async (filter) => {
    try {
        let ads = await Service.find({"category": {"$in": `${filter}`}}).populate('category').populate('owner');
        if (!ads) {
            throw { 
                msg: `error: Não foram encontrados Ads com o filtro ${filter}`,
                status: true
            }
        }

        return ads;
    } catch (error) {
        throw { 
            msg: `error: Erro ao executar a query no DB ${error}`,
            status: true,
            obj: error
        }
    }
}

const CreateService = async (userObj, name, celphone, description, images, categoryObj, value) => {
    try {
        return await Service.create({
            owner: userObj,
            name,
            description,
            celphone,
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

const GetServicesByUserPaginated = async (userId) => {
    try {
        let ads = await Service.find({"owner": ObjectId(userId) }).populate('category').populate('owner');

        if (!ads) {
            throw { 
                msg: `error: Não foram encontrados Ads com o userId ${filter}`,
                status: true
            }
        }

        return ads;
    } catch (error) {
        throw { 
            msg: `error: Erro ao executar a query no DB ${error}`,
            status: true,
            obj: error
        }
    }
}

const GetAdsByUserAndFilterPaginated = async (userId, filter) => {
    try {
        let ads = await Service.find({"owner": ObjectId(userId), "name": {"$regex": `${filter}`, "$options" : 'i'} }).populate('category').populate('owner');

        if (!ads) {
            throw { 
                msg: `error: Não foram encontrados Ads com o userId ${filter}`,
                status: true
            }
        }

        return ads;
    } catch (error) {
        throw { 
            msg: `error: Erro ao executar a query no DB ${error}`,
            status: true,
            obj: error
        }
    }
}


const SetFavorite = async (status, id, userId) => {
    try {
        let user = await Account.findById(userId);
        
        if (status) {
            user.favoriteList.push(id)
            user.save()
            return { msg: true }
        } else {
            user.favoriteList.remove(id)
            user.save()
            return { msg: false }
        }

    } catch (error) {
        throw { 
            msg: `error: Erro ao executar a query no DB ${error}`,
            status: true,
            obj: error
        }
    }
}

const RetrieveFavorite = async (id, userId) => {
    try {
        let user = await Account.findById(userId);
        
        let isFav = false

        user.favoriteList.map(item => {
            if( String(item) === id) {
                isFav = true
            }
        })

        return { msg: isFav }

    } catch (error) {
        throw { 
            msg: `error: Erro ao executar a query no DB ${error}`,
            status: true,
            obj: error
        }
    }
}




module.exports = { 
    GetAllServices,
    GetServicesByFilter,
    GetServicesByCategoryPaginated,
    CreateService,
    GetServicesByUserPaginated,
    GetAdsByUserAndFilterPaginated,
    SetFavorite,
    RetrieveFavorite
}