'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
   const attributes = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      label: {
        type: Sequelize.TEXT
      },
      typeid: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }
      await queryInterface.createTable('Tasks', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Tasks');
  }
};