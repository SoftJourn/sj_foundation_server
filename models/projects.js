// 'use strict'

const db = require('../db/models');
const logger = require('../services/logger');
const helper = require('../services/helper');
const Op = db.Sequelize.Op;


console.log('helper: ', helper.splitQuery);

class Projects {
    async getAll(params) {
        // form 'where' query
        let where = {};
        if (params.category) {
            where.category = {
                slug: {
                    [Op.or]: helper.split(params.category)
                }
            }
        }
        if (params.status) {
            where.status = {
                donationStatus: {
                    [Op.or]: helper.split(params.status)
                }
            }
        }

        // find projects db query
        let res = await db.projects.findAll({
            limit: params.limit*1 || params.limit,
            raw: false,
            include: [{
                model: db.projectStats,
                as: 'projectStats',
                where: where.status
            }, {
                model: db.categories,
                as: 'category',
                where: where.category
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