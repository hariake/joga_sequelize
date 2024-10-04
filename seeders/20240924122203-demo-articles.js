'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Articles', [{
        name: 'Introduction to Ashtanga',
        slug: 'introduction-to-ashtanga',
        image: 'ashtanga.jpg',
        body: '<p> AAAAAAAAAAAAAAAAAAAAAAAA </p>',
        published: '2020-01-08 15:04:23',
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Articles', [{
        name: 'Mornging vinyasa flow routine',
        slug: 'morning-vinyasa-flow-routine',
        image: 'morning.jpg',
        body: '<p> AAAAAAAAAAAAAAAAAAAAAAAA </p>',
        published: '2020-01-08 15:04:23',
        author_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Articles', [{
        name: 'Secrets of a yoga teacher',
        slug: 'secrets-of-a-yoga-teacher',
        image: 'yoga-teacher.jpg',
        body: '<p> AAAAAAAAAAAAAAAAAAAAAAAA </p>',
        published: '2020-01-08 15:04:23',
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  }  
};
