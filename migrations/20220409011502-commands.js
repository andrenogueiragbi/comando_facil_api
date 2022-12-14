'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('commands', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},

			description: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			commands: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			tags: {
				type: Sequelize.TEXT,

			},

			creator: {
				type: Sequelize.STRING,
			},
			title_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "titles",
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
		await queryInterface.dropTable('commands');
	}
};
