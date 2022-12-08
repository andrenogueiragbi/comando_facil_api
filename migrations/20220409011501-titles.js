'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('titles', { 
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			title: {
				type: Sequelize.STRING,
				aloowNull: false,

			},
			description: {
				type: Sequelize.STRING,
				aloowNull: false,

			},

			avatar: {
				type: Sequelize.STRING,

			},
			id_platforms: {
				type: Sequelize.INTEGER,
				aloowNull: false,
				references: {
					model: "platforms",
					key: "id",
				}

			},

			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},

			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('titles');
	}
};