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


}
module.exports = titles

//id	title	description	avatar	id_platforms	created_at	updated_at