const {Sequelize, DataTypes} = require('sequelize');
const connection = require('../database')


const Platforms = connection.define('platform',{
    name: DataTypes.STRING,
    avatar: DataTypes.STRING,
    description: DataTypes.STRING,

},{
    timestamps: false,
})

module.exports = Platforms



