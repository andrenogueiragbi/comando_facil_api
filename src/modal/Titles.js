const { Model, DataTypes } = require('sequelize');
const Platforms = require('./Platforms')

class Titles extends Model {
	static init(sequelize) {
		super.init({
			title: DataTypes.STRING,
			description: DataTypes.STRING,
			avatar: DataTypes.STRING,
			id_platforms: DataTypes.INTEGER,
		}, {
			sequelize,
/* 			modelName: 'titles',
			timestamps: true,
 */

		})
/* 		this.associate = (models) => {
			Titles.hasMany(models.Platforms, {
				foreignKey: 'id'
			});
		}; */


	}


}

module.exports = Titles


