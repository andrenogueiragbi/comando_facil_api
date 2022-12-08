const { Model, DataTypes } = require('sequelize');


class commands extends Model {
    static init(sequelize){
        super.init({
            description: DataTypes.TEXT,
            commands: DataTypes.TEXT,
            tags: DataTypes.STRING,
            creator: DataTypes.STRING,   
            title_id: DataTypes.INTEGER, 
        }, {sequelize})
    }
        

}
module.exports = commands

//id	description	commands	tags	creator	title_id	created_at	updated_at