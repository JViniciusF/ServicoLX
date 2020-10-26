const { Router } = require('express');
const { LoginController } = require('./controller/accountController');
const { GetAllServiceController } = require('./controller/serviceController');
const { NewCategoryController, GetAllCategoriesController } = require('./controller/categoryController');

const routes = Router();

routes.get('/', (req, res) => {
    return res.status(200).json({"msg": `Hello World`})
});

routes.post('/account/register', (req, res) => {
    return LoginController(req, res);
});

routes.get('/service/getAllAds', (req, res) => {
    return GetAllServiceController(req, res);
});

routes.get('/category/getAll', (req, res) => {
    return GetAllCategoriesController(res);
});

routes.post('/category/new', (req, res) => {
    return NewCategoryController(req, res);
});


module.exports = routes;