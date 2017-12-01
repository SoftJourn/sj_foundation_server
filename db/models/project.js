'use strict';

const db = require('../../db/models');

module.exports = (sequelize, DataTypes) => {
  let Project = sequelize.define('projects', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    shortDescription: DataTypes.STRING,
    price: DataTypes.FLOAT,
    status: DataTypes.STRING,
    thumbUrl: DataTypes.STRING,
    slug: DataTypes.STRING,
    due: DataTypes.DATE,
    categoryId : DataTypes.INTEGER,
    creatorId : DataTypes.INTEGER,
    donateMore : DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // Project.hasOne(models.projectStats, { foreignKey: 'projectId', as: 'projectStats' })
      }
    }
  });
  return Project;
};