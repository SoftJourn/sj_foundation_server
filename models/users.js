'use strict'

const db = require('../db/models');
const logger = require('../services/logger');

class Users {
    async getAll() {
        let res = await db.users.findAll();
        return res;
    }

    async getById(params) {
        return await db.users.findById(params.id);
    }

    async create(params) {
        await db.users.create(params);
        return { success: true };
    }

    async update(params) {
        await db.users.update(params, { where: { id: params.id } });
        return { success: true };
    }

    async delete(params) {
        await db.users.destroy({ where: { id: params.id } });
        return { success: true };
    }
}

module.exports = Users;