'use strict'
const sequelize = require('sequelize');
const db = require('../db/models');
const logger = require('../services/logger');


class Projects {
    async getAll(params) {
        let res = await db.projects.findAll({
            raw: false,
            include: [{
                model: db.projectStats,
                as: 'projectStats'
            }, {
                model: db.categories,
                as: 'category'
            }]
        });
        return res;
    }

    // TODO: need to remove 'getByParams' logic into 'project' resource models
    async getByParams(category, sort, status) {

        let params = [];
        if (category) {
            params.push(`category.slug = '${category}'`);
        }
        if (status) {
            params.push(`projectStats.donationStatus = '${status}'`);
        }
        const where = params.join(' and ');

        let res = await db.projects.findAll({
            raw: false,
            where: sequelize.literal(where),
            include: [{
                model: db.projectStats,
                as: 'projectStats'
            }, {
                model: db.categories,
                as: 'category'
            }]
        });
        return res;
    }

    async getById(params) {
        return await db.projects.findById(params.id, {
            raw: false,
            include: [{
                model: db.projectStats,
                as: 'projectStats'
            }, {
                model: db.categories,
                as: 'category'
            }]
        });
    }

    async create(params) {
        await db.projects.create(params);
        return { success: true };
    }

    async update(params) {
        await db.projects.update(params, { where: { id: params.id } });
        return { success: true };
    }

    async delete(params) {
        await db.projects.destroy({ where: { id: params.id } });
        return { success: true };
    }
}

module.exports = Projects;