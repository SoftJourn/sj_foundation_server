// 'use strict'

const db = require('../db/models');
const logger = require('../services/logger');
const helper = require('../services/helper');
const Op = db.Sequelize.Op;
const slug = require('slug')

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
        // generate slug:
        params.slug = slug(params.title, {lower: true});

        await db.categories.find({ where: { name: params.category }})
            .then(function (category) {
                params.categoryId = category.id;
                db.projects.create(params);
            });

        db.projects.find({ where: { title: params.title }})
            .then(function (project) {
                var stats = {
                    projectId: project.id,
                    donationStatus: 'active',
                    supporters: 0,
                    canDonate: params.donateMore ? true : false,
                    raised: 0,
                    createdAt: null,
                    updatedAt: null
                }
                db.projectStats.create(stats);
            });

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
