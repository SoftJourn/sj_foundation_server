'use strict';
module.exports = (sequelize, DataTypes) => {
  let Category = sequelize.define('categories', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Category;
};