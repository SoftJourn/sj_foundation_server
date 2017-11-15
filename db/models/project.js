'use strict';
module.exports = (sequelize, DataTypes) => {
  let Project = sequelize.define('Project', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    status: DataTypes.STRING,
    due: DataTypes.DATE,
    category_id : DataTypes.INTEGER,
    creator_id : DataTypes.INTEGER,
    donate_more : DataTypes.BOOLEAN,
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