const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../database')
const Titles = require('../modal/Titles');


const Commands = connection.define('commands', {
    description: DataTypes.TEXT,
    commands: DataTypes.TEXT,
    tags: DataTypes.STRING,
    creator: DataTypes.STRING,
    title_id: DataTypes.INTEGER,

}, {
   
    timestamps: true,


})


Commands.belongsTo(Titles,{
    constraint:true,
    foreignKey:'title_id',
})


module.exports = Commands



