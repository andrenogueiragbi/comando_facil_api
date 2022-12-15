
const {Sequelize, DataTypes} = require('sequelize');
const connection = require('../database')
const Platforms = require('../modal/Platforms');


const Titles = connection.define('titles',{
	title: DataTypes.TEXT,
	description: DataTypes.TEXT,
	avatar: DataTypes.STRING,
	id_platforms: DataTypes.INTEGER,

},{
   
    timestamps: false,


})

Titles.belongsTo(Platforms,{
    constraint:true,
    foreignKey:'id_platforms',
})

module.exports = Titles



