'use strict'

const db = require('../db/models');
const logger = require('../services/logger');

class Categories {
    async getAll() {
        let res = await db.categories.findAll();
        return res;
    }

    async getById(params) {
        return await db.categories.findById(params.id);
    }
}

module.exports = Categories;