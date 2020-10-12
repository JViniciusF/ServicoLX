const { Router } = require('express');
const AccountController = require('./controller/accountController')

const routes = Router();

routes.post('/account/register', (req, res) => {
    return AccountController(req, res);
});

module.exports = routes;