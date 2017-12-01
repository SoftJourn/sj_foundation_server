'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('projects', [
        {
          title: 'Dim Sirka',
          slug: 'dim-sirka',
          content: 'Збір коштів для закупівлі самого необхідного для благодійної органіхзації "Дім Сірка"',
          shortDescription: 'Збір коштів для закупівлі самого необхідного для благодійної органіхзації "Дім Сірка"',
          price: 200000,
          status: 'draft',
          thumbUrl: 'https://sj-foundation.softjourn.if.ua/wp-content/uploads/42-620x269.jpg',
          due: '2017-12-15 23:59:59',
          categoryId : 1,
          creatorId : 1,
          donateMore : true,
          createdAt: '2017-11-15 23:59:59',
          updatedAt: '2017-11-15 23:59:59'       
        },
        {
          title: 'Озеленення офісу',
          slug: 'green-office',
          content: 'Зменшення стресу. Створення захисної атмосфери.',
          shortDescription: 'Зменшення стресу. Створення захисної атмосфери.',
          price: 200000,
          status: 'draft',
          thumbUrl: 'https://sj-foundation.softjourn.if.ua/wp-content/uploads/39-480x320.jpg',
          due: '2017-12-15 23:59:59',
          categoryId : 3,
          creatorId : 2,
          donateMore : true,
          createdAt: '2017-11-15 23:59:59',
          updatedAt: '2017-11-15 23:59:59'       
        },
        {
          title: 'Fingerprint On Office Door',
          slug: 'fingerprint-office-door',
          content: 'Fingerprint On Office Door',
          shortDescription: 'Fingerprint On Office Door',
          price: 200000,
          status: 'draft',
          thumbUrl: 'https://sj-foundation.softjourn.if.ua/wp-content/uploads/fingerprints-FB-1-320x320.jpg',
          due: '2017-12-15 23:59:59',
          categoryId : 2,
          creatorId : 3,
          donateMore : true,
          createdAt: '2017-11-15 23:59:59',
          updatedAt: '2017-11-15 23:59:59'       
        },
        {
          title: 'Сироп Grenadine',
          slug: 'grenadine',
          content: 'Гренадін (англ. Grenadine) - густий солодкий сироп червоного кольору, який широко використовується у приготуванні коктейлів як підсолоджувач.',
          shortDescription: 'Гренадін (англ. Grenadine) - густий солодкий сироп червоного кольору, який широко використовується у приготуванні коктейлів як підсолоджувач.',
          price: 200000,
          status: 'draft',
          thumbUrl: 'https://sj-foundation.softjourn.if.ua/wp-content/uploads/pomegranate-table-620x310.png',
          due: '2017-12-15 23:59:59',
          categoryId : 4,
          creatorId : 4,
          donateMore : true,
          createdAt: '2017-11-15 23:59:59',
          updatedAt: '2017-11-15 23:59:59'       
        },
        {
          title: 'Wild Life для Wild Lands',
          slug: 'wild-life',
          content: 'Неймовірний пазл розміром 5,7 x 1.57 м що налічує 33600 деталей!!!',
          shortDescription: 'Неймовірний пазл розміром 5,7 x 1.57 м що налічує 33600 деталей!!!',
          price: 200000,
          status: 'draft',
          thumbUrl: 'https://sj-foundation.softjourn.if.ua/wp-content/uploads/91pGyoxepxL._SL1500_-620x209.jpg',
          due: '2017-12-15 23:59:59',
          categoryId : 1,
          creatorId : 5,
          donateMore : true,
          createdAt: '2017-11-15 23:59:59',
          updatedAt: '2017-11-15 23:59:59'       
        },
        {
          title: 'PS4 Pro',
          slug: 'ps4-pro',
          content: 'Дуже корисно під час роботи зробити перерву і переключити мозок - і ніщо так не переключає мозок програміста, як пограти у комп\'ютерну гру',
          shortDescription: 'Дуже корисно під час роботи зробити перерву і переключити мозок - і ніщо так не переключає мозок програміста, як пограти у комп\'ютерну гру',
          price: 200000,
          status: 'draft',
          thumbUrl: 'https://sj-foundation.softjourn.if.ua/wp-content/uploads/481195-480x320.jpg',
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
    return queryInterface.bulkDelete('projects', null, {});
  }
};
