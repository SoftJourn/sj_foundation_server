const models = require('../models');
const logger = require('../services/logger');

exports.getAll = (params) => {
    return models.comments.getAll(params); 
};
    
exports.getById = (params) => {
    return models.comments.getById(params); 
};
    
exports.create = (params) => {
    return models.comments.create(params); 
};
    
exports.update = (params) => {
    return models.comments.update(params); 
};
    
exports.delete = (params) => {
    return models.comments.delete(params); 
};