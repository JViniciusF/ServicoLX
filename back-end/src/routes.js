const { Router } = require('express');
const AccountController = require('./controller/accountController')

const routes = Router();

routes.get('/', (req, res) => {
    return res.status(200).json({"msg": `Hello World`})
});

routes.post('/account/register', (req, res) => {
    return AccountController(req, res);
});

module.exports = routes;