'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Projects', [
        {
          title: 'Dim Sirka',
          description: 'Збір коштів для закупівлі самого необхідного для благодійної органіхзації "Дім Сірка"',
          price: 200000,
          status: 'draft',
          due: '2017-12-15 23:59:59',
          categoryId : 1,
          creatorId : 1,
          donateMore : true,
          createdAt: '2017-11-15 23:59:59',
          updatedAt: '2017-11-15 23:59:59'       
        },
        {
          title: 'Озеленення офісу',
          description: 'Зменшення стресу. Створення захисної атмосфери.',
          price: 200000,
          status: 'draft',
          due: '2017-12-15 23:59:59',
          categoryId : 3,
          creatorId : 2,
          donateMore : true,
          createdAt: '2017-11-15 23:59:59',
          updatedAt: '2017-11-15 23:59:59'       
        },
        {
          title: 'Fingerprint On Office Door',
          description: 'Fingerprint On Office Door',
          price: 200000,
          status: 'draft',
          due: '2017-12-15 23:59:59',
          categoryId : 2,
          creatorId : 3,
          donateMore : true,
          createdAt: '2017-11-15 23:59:59',
          updatedAt: '2017-11-15 23:59:59'       
        },
        {
          title: 'Сироп Grenadine',
          description: 'Гренадін (англ. Grenadine) - густий солодкий сироп червоного кольору, який широко використовується у приготуванні коктейлів як підсолоджувач.',
          price: 200000,
          status: 'draft',
          due: '2017-12-15 23:59:59',
          categoryId : 4,
          creatorId : 4,
          donateMore : true,
          createdAt: '2017-11-15 23:59:59',
          updatedAt: '2017-11-15 23:59:59'       
        },
        {
          title: 'Wild Life для Wild Lands',
          description: 'Неймовірний пазл розміром 5,7 x 1.57 м що налічує 33600 деталей!!!',
          price: 200000,
          status: 'draft',
          due: '2017-12-15 23:59:59',
          categoryId : 1,
          creatorId : 5,
          donateMore : true,
          createdAt: '2017-11-15 23:59:59',
          updatedAt: '2017-11-15 23:59:59'       
        },
        {
          title: 'PS4 Pro',
          description: 'Дуже корисно під час роботи зробити перерву і переключити мозок - і ніщо так не переключає мозок програміста, як пограти у комп\'ютерну гру',
          price: 200000,
          status: 'draft',
          due: '2017-12-15 23:59:59',
          categoryId : 3,
          creatorId : 6,
          donateMore : true,
          createdAt: '2017-11-15 23:59:59',
          updatedAt: '2017-11-15 23:59:59'       
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
