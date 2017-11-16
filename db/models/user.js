'use strict';
module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('users', {
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