const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

const { checkUserLoggedIn } = require('./src/middlewares/middleware')

// Rotas da home
route.get('/', homeController.index);

//Rotas de login
route.get('/login/index', loginController.index )
route.post('/login/register', loginController.register )
route.post('/login/login', loginController.login )
route.get('/login/logout', loginController.logout )

//Rotas de contato
route.get('/contato/index', checkUserLoggedIn, contatoController.index )
route.post('/contato/register', checkUserLoggedIn, contatoController.register )
route.get('/contato/index/:id', checkUserLoggedIn, contatoController.editIndex)
route.post('/contato/edit/:id', checkUserLoggedIn, contatoController.edit)
route.get('/contato/delete/:id', checkUserLoggedIn, contatoController.delete)


module.exports = route;

