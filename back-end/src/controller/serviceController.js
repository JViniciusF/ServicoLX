const { GetAllServices,
        GetServicesByFilter,
        CreateService,
        GetServicesByUserPaginated,
        GetAdsByUserAndFilterPaginated,
        SetFavorite,
        RetrieveFavorite
    } = require('../Business/serviceBusiness');

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

const GetServicesByCategoryPaginatedController = async (req, res) => {
    let { filter } = req.body;
    try {
        const ads = await GetServicesByCategoryPaginated(filter);

        ads = await ListingResponse(ads, 2)

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
        celphone,
        images,
        category,
        value } = req.body
    try {
        const service = await CreateService(owner, name, celphone, description, images, category, value);
            
        return res.json({msg: "Serviço criado"});
    } catch (error) {
        return { 
            msg: `error: Erro ao realizar 'GetServicesByFilterController' ${error}`,
            status: true,
            obj: error.obj
        };
    }
}

const GetAllAdsByUserPaginatedController = async (req, res) => {
    let { userId } = req.body;
    try {
        let ads = await GetServicesByUserPaginated(userId);

        ads = await ListingResponse(ads, 2)

        return res.json(ads);
    } catch (error) {
        return { 
            msg: `error: Erro ao realizar 'GetServicesByFilterController' ${error}`,
            status: true,
            obj: error.obj
        };
    };
};

const GetAdsByUserAndFilterPaginatedController = async (req, res) => {
    let { userId, filter } = req.body;
    try {
        let ads;

        if (filter)
            ads = await GetAdsByUserAndFilterPaginated(userId, filter);
        else
            ads = await GetServicesByUserPaginated(userId);

        ads = await ListingResponse(ads, 2);

        return res.json(ads);
    } catch (error) {
        return { 
            msg: `error: Erro ao realizar 'GetServicesByFilterController' ${error}`,
            status: true,
            obj: error.obj
        };
    };
};

const SetFavoriteController = async (req, res) => {
    let { status, id, userId } = req.body;
    try {
        let newStatus = await SetFavorite(status, id, userId);

        return res.json(newStatus);
    } catch (error) {
        return { 
            msg: `error: Erro ao realizar 'GetServicesByFilterController' ${error}`,
            status: true,
            obj: error.obj
        };
    };
};

const RetrieveFavoriteController = async (req, res) => {
    let { id, userId } = req.body;
    try {
        let newStatus = await RetrieveFavorite(id, userId);

        return res.json(newStatus);
    } catch (error) {
        return { 
            msg: `error: Erro ao realizar 'GetServicesByFilterController' ${error}`,
            status: true,
            obj: error.obj
        };
    };
};



module.exports = { 
    GetAllServiceController, 
    GetServicesByFilterController, 
    GetServicesByCategoryPaginatedController, 
    CreateServiceController,
    GetServicesByFilterPaginatedController,
    GetAllAdsByUserPaginatedController,
    GetAdsByUserAndFilterPaginatedController,
    SetFavoriteController,
    RetrieveFavoriteController
};