const { Router } = require('express');
const { LoginController } = require('./controller/accountController');

const { 
    GetAllServiceController,
    GetServicesByFilterController,
    GetServicesByCategoryController,
    CreateServiceController,
    GetServicesByFilterPaginatedController
} = require('./controller/serviceController');

const { 
    NewCategoryController,
    GetAllCategoriesController,
    GetAllCategoriesPaginatedController 
} = require('./controller/categoryController');

const routes = Router();

// ACCOUNT CONTROLLERS
routes.post('/account/register', (req, res) => {
    return LoginController(req, res);
});


// SERVICE CONTROLLERS
routes.get('/service/getAllAds', (req, res) => {
    return GetAllServiceController(req, res);
});

routes.post('/service/getAdsByFilter', (req, res) => {
    return GetServicesByFilterController(req, res);
});

routes.post('/service/getAdsByFilterPaginated', (req, res) => {
    return GetServicesByFilterPaginatedController(req, res);
});

routes.post('/service/getAdsByCategory', (req, res) => {
    return GetServicesByCategoryController(req, res);
});

routes.post('/service/createService', (req, res) => {
    return CreateServiceController(req, res);
});


// CATEGORY CONTROLLERS
routes.get('/category/getAll', (req, res) => {
    return GetAllCategoriesController(res);
});

routes.get('/category/getAllPaginated', (req, res) => {
    return GetAllCategoriesPaginatedController(res);
});

routes.post('/category/new', (req, res) => {
    return NewCategoryController(req, res);
});

module.exports = routes;
