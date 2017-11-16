'use strict'

const db = require('../db/models');
const logger = require('../services/logger');

class Projects {
    async getAll() {
        let res = await db.projects.findAll();
        return res;
    }

    async getById(params) {
        return await db.projects.findById(params.id);
    }

    async create(params) {
        await db.projects.create(params);
        return {success: true};
    }

    async update(params) {
        await db.projects.update(params, {where : {id : params.id}});
        return {success: true};
    }

    async delete(params) {
        await db.projects.destroy({where : {id : params.id}});
        return {success: true};
    }
}

module.exports = Projects;