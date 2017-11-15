'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { 
        name: 'John',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59' 
      },
      { 
        name: 'Kate',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59' 
      },
      {
        name: 'Brian',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59' 
      },
      { 
        name: 'Petro',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59' 
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
