'use strict';
module.exports = (sequelize, DataTypes) => {
  let Comment = sequelize.define('comments', {
    authorId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    text: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Comment;
};