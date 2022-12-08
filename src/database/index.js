const Sequilize = require("sequelize")
const dbConfig = require('../config/database')

const User = require('../modal/User')
const Commands = require('../modal/Commands')
const TypesCommand = require('../modal/TypesCommand')
const Ticket = require('../modal/Ticket')


const Platforms = require('../modal/Platforms')



//iniciando as a conexão do banco de dados
const connection = new Sequilize(dbConfig)

User.init(connection);
Commands.init(connection);
TypesCommand.init(connection);
Ticket.init(connection);

Platforms.init(connection);

module.exports = connection