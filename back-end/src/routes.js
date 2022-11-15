const { Router, response } = require('express');
const { LoginController, SetLocationController,RegisterController,LoginControllerByGoogle,GetAccountController} = require('./controller/accountController');

const { 
    GetAllServicePaginatedController,
    GetServicesByFilterController,
    GetServicesByCategoryPaginatedController,
    GetServicesByCategoryAndFilterPaginatedController,
    CreateServiceController,
    GetServicesByFilterPaginatedController,
    GetAllAdsByUserPaginatedController,
    GetAdsByUserAndFilterPaginatedController,
    GetAllAdsByUsersFavoritesPaginatedController,
    SetFavoriteController,
    RetrieveFavoriteController,
    IncrementServiceController,
    IncrementRatingController
} = require('./controller/serviceController');

const { 
    NewCategoryController,
    GetAllCategoriesController,
    GetAllCategoriesPaginatedController 
} = require('./controller/categoryController');

const {
    AddMessageController,
    GetAllMessagesByConversationController
} = require ('./controller/messageController');

const {
    AddConversationController,
    GetAllConversationByAllUsersController,
    GetAllConversationByUserController,
    GetConversationByIdController
} = require ('./controller/conversationController');

const routes = Router();

// ACCOUNT CONTROLLERS
routes.post('/account/login', (req, res) => {
    return LoginController(req, res);
});

routes.post('/account/register', (req, res) => {
    return RegisterController(req, res);
});

routes.post('/account/loginByGoogle', (req, res) => {
    return LoginControllerByGoogle(req, res);
});

routes.post('/account/setNewLocation', (req, res) => {
    return SetLocationController(req, res);
});

routes.post('/account/getUserAccount', (req,res)=>{
    return GetAccountController(req,res)
})

// SERVICE CONTROLLERS
routes.post('/service/getAllAdsPaginated', (req, res) => {
    return GetAllServicePaginatedController(req, res);
});

routes.post('/service/getAdsByFilter', (req, res) => {
    return GetServicesByFilterController(req, res);
});

routes.post('/service/getAdsByFilterPaginated', (req, res) => {
    return GetServicesByFilterPaginatedController(req, res);
});

routes.post('/service/getAdsByCategoryPaginated', (req, res) => {
    return GetServicesByCategoryPaginatedController(req, res);
});

routes.post('/service/getAdsByCategoryAndFilterPaginated', (req, res) => {
    return GetServicesByCategoryAndFilterPaginatedController(req, res);
});

routes.post('/service/getAllAdsByUserPaginated', (req, res) => {
    return GetAllAdsByUserPaginatedController(req, res);
});

routes.post('/service/getAdsByUserAndFilterPaginated', (req, res) => {
    return GetAdsByUserAndFilterPaginatedController(req, res);
});

routes.post('/service/getAllAdsByUsersFavoritesPaginated', (req, res) => {
    return GetAllAdsByUsersFavoritesPaginatedController(req, res);
});

routes.post('/service/setFavorite', (req, res) => {
    return SetFavoriteController(req, res);
});

routes.post('/service/retrieveFavorite', (req, res) => {
    return RetrieveFavoriteController(req, res);
});

routes.post('/service/createService', (req, res) => {
    return CreateServiceController(req, res);
});

routes.post('/service/incrementHiredService', (req, res) => {
    return IncrementServiceController(req, res);
});

routes.post('/service/incrementRatingService', (req, res) => {
    return IncrementRatingController(req, res);
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

// Conversation Controller
routes.post('/conversation/new',(req,res)=>{
    return AddConversationController(req,res);

});

routes.post('/conversation/getById',(req,res)=>{
    return GetConversationByIdController(req,res);

});

routes.post('/conversation/getAllConversationByUser',(req,res)=>{
    return GetAllConversationByUserController(req,res)
    
});

routes.post('/conversation/getAllConversationByAllUsers',(req,res)=>{
    return GetAllConversationByAllUsersController(req,res)
});

// Message Controller
routes.post('/message/new',(req,res)=>{
    return AddMessageController (req,res)

});

routes.post('/message/getAllMessageByConversation',(req,res)=>{
    return GetAllMessagesByConversationController(req,res)

});

module.exports = routes;
