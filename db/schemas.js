const logger = require('../services/logger');
const Sequelize = require('sequelize');
const db = require('./').instance;

// define schemas

// - - - - - - - - - - - - - - - - - - - - - - - - - -
// PROJECT SCHEMA
// - - - - - - - - - - - - - - - - - - - - - - - - - -
const Projects = db.define('projects', {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.FLOAT
    },
    status: {
      type: Sequelize.STRING
    },
    due: {
      type: Sequelize.DATE
    },
    category_id : {
      type: Sequelize.INTEGER
    },
    creator_id : {
      type: Sequelize.INTEGER
    },
    donate_more : {
      type: Sequelize.BOOLEAN
    }
});

// - - - - - - - - - - - - - - - - - - - - - - - - - -
// COMMENT SCHEMA
// - - - - - - - - - - - - - - - - - - - - - - - - - -

const Comments = db.define('comments', {
    text: {
      type: Sequelize.STRING
    }
});

// - - - - - - - - - - - - - - - - - - - - - - - - - -
// USER SCHEMA
// - - - - - - - - - - - - - - - - - - - - - - - - - -

const Users = db.define('users', {
    id : {
      type: Sequelize.INTEGER      
    },
    name: {
      type: Sequelize.STRING
    }
});

// - - - - - - - - - - - - - - - - - - - - - - - - - -
// CATEGORY SCHEMA
// - - - - - - - - - - - - - - - - - - - - - - - - - -

const Categories = db.define('categories', {
    id : {
      type: Sequelize.INTEGER      
    },
    name : {
      name: Sequelize.STRING
    }
});