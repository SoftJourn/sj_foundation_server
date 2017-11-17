'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'rachel',
        firstName: 'Rachel',
        lastName: 'Green',
        nickname: 'rgreen',
        email: 'rgreen@softjourn.com',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59' 
      },
      {
        username: 'ross',
        firstName: 'Ross',
        lastName: 'Geller',
        nickname: 'rgeller',
        email: 'rgellar@softjourn.com',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59' 
      },
      {
        username: 'fibi',
        firstName: 'Fibi',
        lastName: 'Bufe',
        nickname: 'fbufe',
        email: 'fbufe@softjourn.com',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59' 
      },
      {
        username: 'joe',
        firstName: 'Joey',
        lastName: 'Tribbiani',
        nickname: 'jtribbiani',
        email: 'jtribbiani@softjourn.com',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59' 
      },
      {
        username: 'monica',
        firstName: 'Monica',
        lastName: 'Geller',
        nickname: 'mgeller',
        email: 'mgeller@softjourn.com',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59' 
      },
      {
        username: 'chandler',
        firstName: 'Chandler',
        lastName: 'Bing',
        nickname: 'cbing',
        email: 'cbing@softjourn.com',
        createdAt: '2017-11-15 23:59:59',
        updatedAt: '2017-11-15 23:59:59' 
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
