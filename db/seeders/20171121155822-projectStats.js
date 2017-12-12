'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('projectStats', [
            {
                projectId: 1,
                donationStatus: 'won',
                supporters: 10,
                canDonate: false,
                raised: 10000,
            },
            {
                projectId: 2,
                donationStatus: 'won',
                supporters: 12,
                canDonate: false,
                raised: 20000,
            },
            {
                projectId: 3,
                donationStatus: 'lost',
                supporters: 22,
                canDonate: false,
                raised: 30000,
            },
            {
                projectId: 4,
                donationStatus: 'won',
                supporters: 9,
                canDonate: false,
                raised: 10000,
            },
            {
                projectId: 5,
                donationStatus: 'won',
                supporters: 10,
                canDonate: false,
                raised: 10000,
            },
            {
                projectId: 6,
                donationStatus: 'active',
                supporters: 10,
                canDonate: true,
                raised: 3000,
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('projectStats', null, {});
    }
};
