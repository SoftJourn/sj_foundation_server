'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('comments', [
            {
                projectId: 6,
                authorId: 2,
                text: 'Може якась добра душа (з міркувань реклами/пропаганди) та й принесе на кілька днів до офісу свій PS4 ?',
                createdAt: '2017-11-15 23:59:59',
                updatedAt: '2017-11-15 23:59:59'
            },
            {
                projectId: 6,
                authorId: 3,
                text: 'Не, хочу щоб народ міг розслабитись',
                createdAt: '2017-11-15 23:59:59',
                updatedAt: '2017-11-15 23:59:59'
            },
            {
                projectId: 6,
                authorId: 4,
                text: 'Ти хочеш свою приставку продати?',
                createdAt: '2017-11-15 23:59:59',
                updatedAt: '2017-11-15 23:59:59'
            },
            {
                projectId: 1,
                authorId: 1,
                text: 'Привіт! Як у вас справи?',
                createdAt: '2017-11-15 23:59:59',
                updatedAt: '2017-11-15 23:59:59'
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('comments', null, {});
    }
};
