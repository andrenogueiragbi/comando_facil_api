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

      id_platforms: {
        type: Sequelize.INTEGER,
        aloowNull: false,

      },
      avatar: {
        type: Sequelize.STRING,

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