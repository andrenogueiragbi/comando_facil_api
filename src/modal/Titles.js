const { Model, DataTypes } = require('sequelize');

class titles extends Model {
    static init(sequelize){
        super.init({
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            avatar: DataTypes.STRING,
            id_platforms: DataTypes.INTEGER,
        }, {sequelize})
    }
    static associate(models) {
        this.belongsTo(models.platforms);
        
        
    }


}

module.exports = titles



/* 

'use strict';


module.exports = (sequelize, DataTypes) => {
    const Titles = sequelize.define('Titles', {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        avatar: DataTypes.STRING,
        id_platforms: DataTypes.INTEGER,
    }, {});
    Titles.associate = function(models) {
        Titles.belongsTo(models.Company, {foreignKey:'id_platforms', sourceKey:'id'})
    };
    return Titles;
  };

//id	title	description	avatar	id_platforms	created_at	updated_at */