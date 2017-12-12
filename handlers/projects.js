const models = require('../models');
const logger = require('../services/logger');

exports.getAll = (params) => {
    return models.projects.getAll(params);
};

exports.getById = (params) => {
    return models.projects.getById(params);
};

exports.create = (params) => {
    return models.projects.create(params);
};

exports.update = (params) => {
    return models.projects.update(params);
};

exports.delete = (params) => {
    return models.projects.delete(params);
};