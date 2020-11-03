const { GetAllServices, GetServicesByFilter, CreateService } = require('../Business/serviceBusiness');
const { ListingResponse } = require('../controller/utils/Utils')

const GetAllServiceController = async (req, res) => {
    try {
        const ads = await GetAllServices();
        return res.json(ads);
    } catch (error) {
        return { 
            msg: `error: Erro ao realizar 'GetAllServiceController' ${error}`,
            status: true,
            obj: error.obj
        };
    };
};

const GetServicesByFilterController = async (req, res) => {
    let { filter } = req.body;
    try {
        const ads = await GetServicesByFilter(filter);
        return res.json(ads);
    } catch (error) {
        return { 
            msg: `error: Erro ao realizar 'GetServicesByFilterController' ${error}`,
            status: true,
            obj: error.obj
        };
    };
};

const GetServicesByFilterPaginatedController = async (req, res) => {
    let { filter } = req.body;
    try {
        let ads = await GetServicesByFilter(filter);

        ads = await ListingResponse(ads, 2)

        return res.json(ads);
    } catch (error) {
        return { 
            msg: `error: Erro ao realizar 'GetServicesByFilterController' ${error}`,
            status: true,
            obj: error.obj
        };
    };
}

const GetServicesByCategoryController = async (req, res) => {
    let { filter } = req.body;
    try {
        const ads = await GetServicesByCategory(filter);
        return res.json(ads);
    } catch (error) {
        return { 
            msg: `error: Erro ao realizar 'GetServicesByFilterController' ${error}`,
            status: true,
            obj: error.obj
        };
    };
};

const CreateServiceController = async (req, res) => {
    let { 
        owner,
        name,
        description,
        images,
        category,
        value } = req.body
    try {
        const service = await CreateService(owner, name, description, images, category, value);
            
        return res.json({msg: "Serviço criado"});
    } catch (error) {
        return { 
            msg: `error: Erro ao realizar 'GetServicesByFilterController' ${error}`,
            status: true,
            obj: error.obj
        };
    }
}


module.exports = { 
    GetAllServiceController, 
    GetServicesByFilterController, 
    GetServicesByCategoryController, 
    CreateServiceController,
    GetServicesByFilterPaginatedController
};