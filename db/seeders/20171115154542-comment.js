'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      { 
        text: 'Hello there!',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59' 
      },
      {
        text: 'The best comment ever',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59' 
      },
      {
        text: 'How you doing?',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59' 
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
