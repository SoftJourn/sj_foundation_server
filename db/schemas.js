const logger = require('../services/logger');
const Sequelize = require('sequelize');
const db = require('./').instance;

// define schemas

const Projects = db.define('projects', {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
});

const Comments = db.define('comments', {
    text: {
      type: Sequelize.STRING
    }
});

const Users = db.define('users', {
    name: {
      type: Sequelize.STRING
    }
});