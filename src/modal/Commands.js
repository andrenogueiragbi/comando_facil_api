const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../database')
const Titles = require('../modal/Titles');
const Platforms = require('../modal/Platforms')


const Commands = connection.define('commands', {
    description: DataTypes.TEXT,
    commands: DataTypes.TEXT,
    tags: DataTypes.STRING,
    creator: DataTypes.STRING,
    title_id: DataTypes.INTEGER,

}, {
   
    timestamps: false,


})


Commands.belongsTo(Titles,{
    constraint:true,
    foreignKey:'title_id',
})


module.exports = Commands



