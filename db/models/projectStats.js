'use strict';
const Projects = require('./project')

module.exports = (sequelize, DataTypes) => {
  let ProjectStats = sequelize.define('projectStats', {
    projectId: {
      type: DataTypes.INTEGER,
      references: {
        model: Projects,
        key:   "id"
      }
    },
    donationStatus: DataTypes.STRING,
    supporters: DataTypes.INTEGER,
    canDonate: DataTypes.FLOAT,
    raised : DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
      field: 'createdAt',
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
      field: 'updatedAt',
    },
  }, {
    classMethods: {
      associate: function(models) {
        // ProjectStats.belongsTo(models.projects, { foreignKey: 'fk_project_stats' });
      }
    }
  });
  return ProjectStats;
};