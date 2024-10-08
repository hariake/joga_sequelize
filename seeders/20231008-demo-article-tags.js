'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ArticleTags', [
      {
        articleId: 1, // Replace with a valid Article ID
        tagId: 1,      // Replace with a valid Tag ID
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 1,
        tagId: 2,      // Replace with another valid Tag ID
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 2, // Replace with a valid Article ID
        tagId: 1,      // Replace with a valid Tag ID
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 2,
        tagId: 3,      // Replace with another valid Tag ID
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 3, // Replace with a valid Article ID
        tagId: 2,      // Replace with a valid Tag ID
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ArticleTags', null, {});
  }
};
