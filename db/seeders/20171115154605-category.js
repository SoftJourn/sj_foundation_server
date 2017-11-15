'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'Social',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59' 
      },
      {
        name: 'Home',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59' 
      },
      {
        name: 'Office',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59' 
      },
      {
        name: 'Health',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59' 
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
