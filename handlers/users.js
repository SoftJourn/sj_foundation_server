const models = require('../models');
const logger = require('../services/logger');

exports.getAll = (params) => {
    return models.users.getAll(params);
};

exports.getById = (params) => {
    return models.users.getById(params);
};

exports.create = (params) => {
    return models.users.create(params);
};

exports.update = (params) => {
    return models.users.update(params);
};

exports.delete = (params) => {
    return models.users.delete(params);
};