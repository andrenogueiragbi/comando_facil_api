const Sequilize = require("sequelize")
const dbConfig = require('../config/database')

const User = require('../modal/User')
const Commands = require('../modal/Commands')


const Platforms = require('../modal/Platforms')
const Titles = require('../modal/Titles')



//iniciando as a conexão do banco de dados
const connection = new Sequilize(dbConfig)

User.init(connection);
Commands.init(connection);
Titles.init(connection);

Platforms.init(connection);


module.exports = connection