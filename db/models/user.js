'use strict';
module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};