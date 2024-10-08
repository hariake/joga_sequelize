'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tags', [
      {
        name: 'Technology',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Health',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Travel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Education',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lifestyle',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
