const models = require('../models');
const logger = require('../services/logger');

exports.getAll = (params) => {
    return models.projects.getAll(params);
};

exports.getById = (params) => {
    return models.projects.getById(params);
};

exports.create = (params, request) => {
    return models.projects.create(request.body);
};

exports.update = (params) => {
    return models.projects.update(params);
};

exports.delete = (params) => {
    return models.projects.delete(params);
};

exports.uploadProjectFile = (params, req) => {
    return { "result": "uploaded", "uploadedFile": req.file.filename };
};
