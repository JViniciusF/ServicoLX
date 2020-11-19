const Account = require('../models/Account');
const Service = require('../models/Service')
const Category = require('../models/Categories');
var ObjectId = require('mongoose').Types.ObjectId;

const GetAllServices = async (filtroPreco, filtroReputacao, filtroCotado) => {
    try {
        let ads = await Service.find({}).populate('category').populate('owner');

        if (ads.length > 1) {
            // Filter by quotation
            if (filtroCotado && filtroCotado !== "" && filtroCotado !== 'Cotado') {
                if (filtroCotado === 'Cotado ^') {
                    ads.sort((a,b) => a.quotedTimes > b.quotedTimes ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.quotedTimes < b.quotedTimes ? 1 : -1)
                }
            }

            // Filter by rating
            if (filtroReputacao && filtroReputacao !== "" && filtroReputacao !== 'Reputação') {
                if (filtroReputacao === 'Reputação ^') {
                    ads.sort((a,b) => a.rating > b.rating ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.rating < b.rating ? 1 : -1)
                }
            }

            // Filter by price
            if (filtroPreco && filtroPreco !== "" && filtroPreco !== 'Preço') {
                if (filtroPreco === 'Preço ^') {
                    ads.sort((a,b) => a.value > b.value ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.value < b.value ? 1 : -1)
                }
            }
        }

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

const GetServicesByFilter = async (filter, filtroPreco, filtroReputacao, filtroCotado) => {
    try {
        let ads = await Service.find({"name": {"$regex": `${filter}`, "$options" : 'i'}}).populate('category').populate('owner');

        if (ads.length > 1) {
            // Filter by quotation
            if (filtroCotado && filtroCotado !== "" && filtroCotado !== 'Cotado') {
                if (filtroCotado === 'Cotado ^') {
                    ads.sort((a,b) => a.quotedTimes > b.quotedTimes ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.quotedTimes < b.quotedTimes ? 1 : -1)
                }
            }
    
            // Filter by reputation
            if (filtroReputacao && filtroReputacao !== "" && filtroReputacao !== 'Reputação') {
                if (filtroReputacao === 'Reputação ^') {
                    ads.sort((a,b) => a.reputation > b.reputation ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.reputation < b.reputation ? 1 : -1)
                }
            }
    
            // Filter by price
            if (filtroPreco && filtroPreco !== "" && filtroPreco !== 'Preço') {
                if (filtroPreco === 'Preço ^') {
                    ads.sort((a,b) => a.value > b.value ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.value < b.value ? 1 : -1)
                }
            }
        }

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

const GetServicesByCategoryPaginated = async (filter, filtroPreco, filtroReputacao, filtroCotado) => {
    try {
        let category = await Category.findOne({"name": `${filter}`});
        let ads = await Service.find({"category": {"$all": [ObjectId(category.id)]}}).populate('category').populate('owner');

        if (ads.length > 1) {
            // Filter by quotation
            if (filtroCotado && filtroCotado !== "" && filtroCotado !== 'Cotado') {
                if (filtroCotado === 'Cotado ^') {
                    ads.sort((a,b) => a.quotedTimes > b.quotedTimes ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.quotedTimes < b.quotedTimes ? 1 : -1)
                }
            }
    
            // Filter by reputation
            if (filtroReputacao && filtroReputacao !== "" && filtroReputacao !== 'Reputação') {
                if (filtroReputacao === 'Reputação ^') {
                    ads.sort((a,b) => a.reputation > b.reputation ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.reputation < b.reputation ? 1 : -1)
                }
            }
    
            // Filter by price
            if (filtroPreco && filtroPreco !== "" && filtroPreco !== 'Preço') {
                if (filtroPreco === 'Preço ^') {
                    ads.sort((a,b) => a.value > b.value ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.value < b.value ? 1 : -1)
                }
            }
        }

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

const GetServicesByCategoryAndFilterPaginated = async (filter, value, filtroPreco, filtroReputacao, filtroCotado) => {
    try {
        let category = await Category.findOne({"name": `${filter}`});
        let ads = await Service.find({"$and": [{"category": {"$all": [ObjectId(category.id)]}}, { "name": {"$regex": `${value}`, "$options" : 'i'}}]}).populate('category').populate('owner');

        if (ads.length > 1) {
            // Filter by quotation
            if (filtroCotado && filtroCotado !== "" && filtroCotado !== 'Cotado') {
                if (filtroCotado === 'Cotado ^') {
                    ads.sort((a,b) => a.quotedTimes > b.quotedTimes ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.quotedTimes < b.quotedTimes ? 1 : -1)
                }
            }
    
            // Filter by reputation
            if (filtroReputacao && filtroReputacao !== "" && filtroReputacao !== 'Reputação') {
                if (filtroReputacao === 'Reputação ^') {
                    ads.sort((a,b) => a.reputation > b.reputation ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.reputation < b.reputation ? 1 : -1)
                }
            }
    
            // Filter by price
            if (filtroPreco && filtroPreco !== "" && filtroPreco !== 'Preço') {
                if (filtroPreco === 'Preço ^') {
                    ads.sort((a,b) => a.value > b.value ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.value < b.value ? 1 : -1)
                }
            }
        }

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

const GetServicesByUserPaginated = async (userId, filtroPreco, filtroReputacao, filtroCotado) => {
    try {
        let ads = await Service.find({"owner": ObjectId(userId) }).populate('category').populate('owner');

        if (ads.length > 1) {
            // Filter by quotation
            if (filtroCotado && filtroCotado !== "" && filtroCotado !== 'Cotado') {
                if (filtroCotado === 'Cotado ^') {
                    ads.sort((a,b) => a.quotedTimes > b.quotedTimes ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.quotedTimes < b.quotedTimes ? 1 : -1)
                }
            }
    
            // Filter by reputation
            if (filtroReputacao && filtroReputacao !== "" && filtroReputacao !== 'Reputação') {
                if (filtroReputacao === 'Reputação ^') {
                    ads.sort((a,b) => a.reputation > b.reputation ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.reputation < b.reputation ? 1 : -1)
                }
            }
    
            // Filter by price
            if (filtroPreco && filtroPreco !== "" && filtroPreco !== 'Preço') {
                if (filtroPreco === 'Preço ^') {
                    ads.sort((a,b) => a.value > b.value ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.value < b.value ? 1 : -1)
                }
            }
        }

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

const GetAdsByUserAndFilterPaginated = async (userId, filter, filtroPreco, filtroReputacao, filtroCotado) => {
    try {
        let ads = await Service.find({"owner": ObjectId(userId), "name": {"$regex": `${filter}`, "$options" : 'i'} }).populate('category').populate('owner');

        if (ads.length > 1) {
            // Filter by quotation
            if (filtroCotado && filtroCotado !== "" && filtroCotado !== 'Cotado') {
                if (filtroCotado === 'Cotado ^') {
                    ads.sort((a,b) => a.quotedTimes > b.quotedTimes ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.quotedTimes < b.quotedTimes ? 1 : -1)
                }
            }
    
            // Filter by reputation
            if (filtroReputacao && filtroReputacao !== "" && filtroReputacao !== 'Reputação') {
                if (filtroReputacao === 'Reputação ^') {
                    ads.sort((a,b) => a.reputation > b.reputation ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.reputation < b.reputation ? 1 : -1)
                }
            }
    
            // Filter by price
            if (filtroPreco && filtroPreco !== "" && filtroPreco !== 'Preço') {
                if (filtroPreco === 'Preço ^') {
                    ads.sort((a,b) => a.value > b.value ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.value < b.value ? 1 : -1)
                }
            }
        }

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

const GetAllServicesByUsersFavorites = async (userId, filtroPreco, filtroReputacao, filtroCotado) => {
    try {
        let user = await Account.findOne({ "_id": userId }, { "_id": -1, "favoriteList": 1 })

        let lista = []
        let ads = []
        
        if (user.favoriteList.length > 0) {
            lista = user.favoriteList.map(( favorite ) => favorite.toString())

            for (let index = 0; index < lista.length; index++) {
                let tmp = await Service.findOne({"_id" : lista[index]}).populate('category').populate('owner')
                ads.push(tmp)
            }
        }

    
        if (ads.length > 1) {
            // Filter by quotation
            if (filtroCotado && filtroCotado !== "" && filtroCotado !== 'Cotado') {
                if (filtroCotado === 'Cotado ^') {
                    ads.sort((a,b) => a.quotedTimes > b.quotedTimes ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.quotedTimes < b.quotedTimes ? 1 : -1)
                }
            }
    
            // Filter by reputation
            if (filtroReputacao && filtroReputacao !== "" && filtroReputacao !== 'Reputação') {
                if (filtroReputacao === 'Reputação ^') {
                    ads.sort((a,b) => a.reputation > b.reputation ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.reputation < b.reputation ? 1 : -1)
                }
            }
    
            // Filter by price
            if (filtroPreco && filtroPreco !== "" && filtroPreco !== 'Preço') {
                if (filtroPreco === 'Preço ^') {
                    ads.sort((a,b) => a.value > b.value ? 1 : -1)
                } else {
                    ads.sort((a,b) => a.value < b.value ? 1 : -1)
                }
            }
        }

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

const IncrementService = async (id) => {
    try {
        
        let service = await Service.findOneAndUpdate({ "_id": id }, {'$inc': {"quotedTimes": 1}});
            
        return { msg: service.quotedTimes }

    } catch (error) {
        throw { 
            msg: `error: Erro ao executar a query no DB ${error}`,
            status: true,
            obj: error
        }
    }
}

const IncrementRating = async (id, rate) => {
    try {
        let dbRatings = await Service.findOne({ "_id": id }, {"_id": -1, "totalRating": 1, "countRating": 1 })
        dbRatings.totalRating += rate
        dbRatings.countRating += 1
        let updatedRating =  (dbRatings.totalRating / dbRatings.countRating)
        let service = await Service.findOneAndUpdate({ "_id": id }, {'$inc': {"countRating": 1, "totalRating": rate}} );
        service = await Service.findOneAndUpdate({ "_id": id }, {"$set" : {"rating" : updatedRating}});

        return { msg: service.quotedTimes }

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
    GetServicesByCategoryAndFilterPaginated,
    CreateService,
    GetServicesByUserPaginated,
    GetAdsByUserAndFilterPaginated,
    GetAllServicesByUsersFavorites,
    SetFavorite,
    RetrieveFavorite,
    IncrementService,
    IncrementRating
}