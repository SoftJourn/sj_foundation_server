'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('projectStats', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            donationStatus: {
                type: Sequelize.STRING
            },
            supporters: {
                type: Sequelize.INTEGER
            },
            canDonate: {
                type: Sequelize.FLOAT
            },
            raised: {
                type: Sequelize.INTEGER
            },
            projectId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'projects',
                    key: 'id'
                }
            },
            createdAt: {
                type: Sequelize.DATE(3),
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            },
            updatedAt: {
                type: Sequelize.DATE(3),
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('projectStats');
    }
};
