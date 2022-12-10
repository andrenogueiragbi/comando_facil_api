const Sequilize = require("sequelize")
const dbConfig = require('../config/database')


//iniciando as a conexão do banco de dados
const connection = new Sequilize(dbConfig)




module.exports = connection