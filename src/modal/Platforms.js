const { Model, DataTypes } = require('sequelize');

class platforms extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            avatar: DataTypes.STRING,
            description: DataTypes.STRING,
        }, {sequelize})
    }
    static associate(models) {
        this.hasMany(models.title);
        
        
    }


}
module.exports = platforms