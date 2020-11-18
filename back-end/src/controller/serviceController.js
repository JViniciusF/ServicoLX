const { GetAllServices,
        GetServicesByFilter,
        CreateService,
        GetServicesByUserPaginated,
        GetAdsByUserAndFilterPaginated,
        GetServicesByCategoryPaginated,
        GetServicesByCategoryAndFilterPaginated,
        SetFavorite,
        RetrieveFavorite,
        IncrementService,
        IncrementRating
    } = require('../Business/serviceBusiness');

const { ListingResponse } = require('../controller/utils/Utils')


const GetAllServicePaginatedController = async (req, res) => {
    let { filtroPreco, filtroReputacao, filtroCotado } = req.body;
    try {

        let ads = await GetAllServices(filtroPreco, filtroReputacao, filtroCotado);

        ads = await ListingResponse(ads, 2)

        return res.json(ads);
    } catch (error) {
        return res.status(500).json({ 
            msg: `error: Erro ao realizar 'GetAllServiceController' ${error}`,
            status: true,
            obj: error.obj
        });
    };
};

const GetServicesByFilterController = async (req, res) => {
    let { filter } = req.body;
    try {
        const ads = await GetServicesByFilter(filter);
        return res.json(ads);
    } catch (error) {
        return res.status(500).json({ 
            msg: `error: Erro ao realizar 'GetAllServiceController' ${error}`,
            status: true,
            obj: error.obj
        });
    };
};

const GetServicesByFilterPaginatedController = async (req, res) => {
    let { filter, filtroPreco, filtroReputacao, filtroCotado } = req.body;
    try {
        let ads = []

        if (!filter) {
            ads = await GetAllServices(filtroPreco, filtroReputacao, filtroCotado)
        } else {
            ads = await GetServicesByFilter(filter, filtroPreco, filtroReputacao, filtroCotado);
        }

        ads = await ListingResponse(ads, 2)

        return res.json(ads);
    } catch (error) {
        return res.status(500).json({ 
            msg: `error: Erro ao realizar 'GetAllServiceController' ${error}`,
            status: true,
            obj: error.obj
        });
    };
}

const GetServicesByCategoryPaginatedController = async (req, res) => {
    let { filter, filtroPreco, filtroReputacao, filtroCotado } = req.body;
    try {
        let ads = await GetServicesByCategoryPaginated(filter, filtroPreco, filtroReputacao, filtroCotado);

        ads = await ListingResponse(ads, 2)

        return res.json(ads);
    } catch (error) {
        return res.status(500).json({ 
            msg: `error: Erro ao realizar 'GetAllServiceController' ${error}`,
            status: true,
            obj: error.obj
        });
    };
};

const GetServicesByCategoryAndFilterPaginatedController = async (req, res) => {
    let { filter, value, filtroPreco, filtroReputacao, filtroCotado } = req.body;
    try {
        let ads = await GetServicesByCategoryAndFilterPaginated(filter, value, filtroPreco, filtroReputacao, filtroCotado);

        ads = await ListingResponse(ads, 2)

        return res.json(ads);
    } catch (error) {
        return res.status(500).json({ 
            msg: `error: Erro ao realizar 'GetAllServiceController' ${error}`,
            status: true,
            obj: error.obj
        });
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
        value = value.split(",")
        value[0] = value[0].replace(".", "")
        value[0] = value[0].replace("R$", "")
        value = parseFloat(`${value[0]}.${value[1]}`)
        const service = await CreateService(owner, name, celphone, description, images, category, value);
            
        return res.json({msg: "Serviço criado"});
    } catch (error) {
        return res.status(500).json({ 
            msg: `error: Erro ao realizar 'GetAllServiceController' ${error}`,
            status: true,
            obj: error.obj
        });
    }
}

const GetAllAdsByUserPaginatedController = async (req, res) => {
    let { userId } = req.body;
    try {
        let ads = await GetServicesByUserPaginated(userId);

        ads = await ListingResponse(ads, 2)

        return res.json(ads);
    } catch (error) {
        return res.status(500).json({ 
            msg: `error: Erro ao realizar 'GetAllServiceController' ${error}`,
            status: true,
            obj: error.obj
        });
    };
};

const GetAdsByUserAndFilterPaginatedController = async (req, res) => {
    let { userId, filter, filtroPreco, filtroReputacao, filtroCotado} = req.body;
    try {
        let ads;

        if (filter)
            ads = await GetAdsByUserAndFilterPaginated(userId, filter, filtroPreco, filtroReputacao, filtroCotado);
        else
            ads = await GetServicesByUserPaginated(userId, filtroPreco, filtroReputacao, filtroCotado);

        ads = await ListingResponse(ads, 2);

        return res.json(ads);
    } catch (error) {
        return res.status(500).json({ 
            msg: `error: Erro ao realizar 'GetAllServiceController' ${error}`,
            status: true,
            obj: error.obj
        });
    };
};

const SetFavoriteController = async (req, res) => {
    let { status, id, userId } = req.body;
    try {
        let newStatus = await SetFavorite(status, id, userId);

        return res.json(newStatus);
    } catch (error) {
        return res.status(500).json({ 
            msg: `error: Erro ao realizar 'GetAllServiceController' ${error}`,
            status: true,
            obj: error.obj
        });
    };
};

const RetrieveFavoriteController = async (req, res) => {
    let { id, userId } = req.body;
    try {
        let newStatus = await RetrieveFavorite(id, userId);

        return res.json(newStatus);
    } catch (error) {
        return res.status(500).json({ 
            msg: `error: Erro ao realizar 'GetAllServiceController' ${error}`,
            status: true,
            obj: error.obj
        });
    };
};

const IncrementServiceController = async (req, res) => {
    let { id } = req.body;
    try {
        let newCounting = await IncrementService(id);

        return res.json(newCounting);
    } catch (error) {
        return res.status(500).json({ 
            msg: `error: Erro ao realizar 'GetAllServiceController' ${error}`,
            status: true,
            obj: error.obj
        });
    };
};

const IncrementRatingController = async (req, res) => {
    let { id, rate } = req.body;
    try {
        let newRating = await IncrementRating(id, rate);

        return res.json(newRating);
    } catch (error) {
        return res.status(500).json({ 
            msg: `error: Erro ao realizar 'GetAllServiceController' ${error}`,
            status: true,
            obj: error.obj
        });
    };
};


module.exports = { 
    GetAllServicePaginatedController, 
    GetServicesByFilterController, 
    GetServicesByCategoryPaginatedController, 
    GetServicesByCategoryAndFilterPaginatedController,
    CreateServiceController,
    GetServicesByFilterPaginatedController,
    GetAllAdsByUserPaginatedController,
    GetAdsByUserAndFilterPaginatedController,
    SetFavoriteController,
    RetrieveFavoriteController,
    IncrementServiceController,
    IncrementRatingController
};