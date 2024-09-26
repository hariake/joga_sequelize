'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Author', 'id', {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }),
      queryInterface.changeColumn('Author', 'name', {
        type: Sequelize.STRING,
        allowNull: false
      })
    ])
  },

  down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.dropTable('Author')
    ])
  }
};