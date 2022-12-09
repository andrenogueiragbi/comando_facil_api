const express = require('express');
const UserController = require('./controller/UserController');
const authMiddleware = require('./middlewares/auth');
const isBody = require('./controller/checkBody')

const commands = require('./controller/command')
const platforms = require('./controller/platforms')
const titles = require('./controller/titles')


const routes = express.Router();


/*ROTA DE TIPO PLATAFORMA DA API*/
routes.get('/platform/:Idplatforms', platforms.one)
routes.get('/platforms', platforms.index)
routes.post('/platforms',isBody, platforms.store)
routes.put('/platforms/:Idplatforms',isBody, platforms.update)
routes.delete('/platforms/:Idplatforms', platforms.delete)


/*ROTA DE TITULO DE COMANDO DE PLATAFORMA*/
routes.get('/titles', titles.index)

/*TESTES */
routes.get('/title/:Idtitle', titles.one)

routes.get('/title/platform/:Idplatform', titles.platform)
routes.post('/titles',isBody, titles.store)


/*ROTA DE COMANDO DA API*/
routes.get('/commands', commands.index)
routes.get('/commands/:Idcommand', commands.one)
routes.get('/commands/title/:Idtitle', commands.title)
routes.post('/commands',isBody, commands.store)



///////////////////////////////////////////////////////////







routes.put('/commands/:IdCommand',authMiddleware,isBody, commands.update)
routes.delete('/commands/:IdCommand',authMiddleware,commands.delete)




/*ROTA DE LOGIN DA API*/
routes.post('/users/login', UserController.login);
routes.post('/users',isBody,UserController.store);
/*ROTA DE MATER USER DA API*/
routes.get('/users', authMiddleware, UserController.index);
routes.get('/users/:user_id', authMiddleware, UserController.indexID);
routes.put('/users/:user_id',isBody, authMiddleware, UserController.update);
routes.delete('/users/:user_id',authMiddleware, UserController.delete);







routes.get('/online', (req, res) => {
    res.status(200).send('<h> WELCOME API!!! V 1.0  (C) ANDRÉ - RONALDO 2022 </h>')});


module.exports = routes;


