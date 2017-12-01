'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        name: 'Social',
        slug: 'social',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59' 
      },
      {
        name: 'Ecology',
        slug: 'ecology',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59' 
      },
      {
        name: 'Office',
        slug: 'office',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59' 
      },
      {
        name: 'Health',
        slug: 'health',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
