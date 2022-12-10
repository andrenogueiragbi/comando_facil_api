const { Model, DataTypes } = require('sequelize');

class Platforms extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            avatar: DataTypes.STRING,
            description: DataTypes.STRING,
        }, { sequelize })
    }
    static associate(models) {
        this.hasMany(models.Titles, {
            as: 'titles',
        });
    } 



}
module.exports = Platforms