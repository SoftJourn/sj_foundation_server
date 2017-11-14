const Sequelize = require('sequelize');
const logger = require('../services/logger');
const config = require('../config');

// get db instance
exports.instance = new Sequelize(config.db.name, config.db.user, config.db.password, { 
    host: config.db.host + config.db.port,
    dialect: config.db.dialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false
});

// authenticate
exports.init = async () => {
  try {
    await this.instance.authenticate();
    logger.info('Connection to database has been established successfully.');
  } catch (err) {
    logger.error('Unable to connect to the database:', err);
  }
}
