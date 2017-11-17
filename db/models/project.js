'use strict';
module.exports = (sequelize, DataTypes) => {
  let Project = sequelize.define('projects', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    status: DataTypes.STRING,
    due: DataTypes.DATE,
    categoryId : DataTypes.INTEGER,
    creatorId : DataTypes.INTEGER,
    donateMore : DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Project;
};