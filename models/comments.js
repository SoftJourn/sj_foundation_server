'use strict'

const db = require('../db/models');
const logger = require('../services/logger');

class Comments {
    async getAll() {
        let res = await db.comments.findAll();
        return res;
    }

    async getById(params) {
        return await db.comments.findById(params.id);
    }

    async create(params) {
        await db.comments.create(params);
        return { success: true };
    }

    async update(params) {
        await db.comments.update(params, { where: { id: params.id } });
        return { success: true };
    }

    async delete(params) {
        await db.comments.destroy({ where: { id: params.id } });
        return { success: true };
    }
}

module.exports = Comments;