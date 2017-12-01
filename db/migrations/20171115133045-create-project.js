'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      shortDescription: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      status: {
        type: Sequelize.STRING
      },
      thumbUrl: {
        type: Sequelize.STRING,
      },
      slug: {
        type: Sequelize.STRING,
      },
      due: {
        type: Sequelize.DATE
      },
      categoryId : {
        type: Sequelize.INTEGER
      },
      creatorId : {
        type: Sequelize.INTEGER
      },
      donateMore : {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('projects');
  }
};