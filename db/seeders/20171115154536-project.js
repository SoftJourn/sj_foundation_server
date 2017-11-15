'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Projects', [{
        title: 'Project 1',
        description: 'Project One description',
        price: 200000,
        status: 'draft',
        due: '2017-12-15 23:59:59',
        category_id : 1,
        creator_id : 1,
        donate_more : true,
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
