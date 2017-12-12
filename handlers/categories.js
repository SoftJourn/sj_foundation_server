const models = require('../models');
const logger = require('../services/logger');

exports.getAll = (params) => {
    return models.categories.getAll(params);
};

exports.getById = (params) => {
    return models.categories.getById(params);
};