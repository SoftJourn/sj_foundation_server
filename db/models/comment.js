'use strict';
module.exports = (sequelize, DataTypes) => {
  let Comment = sequelize.define('comments', {
    text: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Comment;
};