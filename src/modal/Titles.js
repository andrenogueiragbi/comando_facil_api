const { Model, DataTypes } = require('sequelize');
const Platforms = require('./Platforms')

class Titles extends Model {
	static init(sequelize) {
		super.init({
			title: DataTypes.TEXT,
			description: DataTypes.TEXT,
			avatar: DataTypes.STRING,
			id_platforms: DataTypes.INTEGER,
		}, {
			sequelize,
/* 			modelName: 'titles',
			timestamps: true,
 */

		})
 		this.associate = (models) => {
			Titles.belongsTo(models.Platforms, {
				foreignKey: 'id',
				as: 'platforms',

			});
		}; 


	}


}

module.exports = Titles


