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
        var payload = params;
        payload.slug = slug(payload.title, {lower: true});
        payload.thumbUrl = '/wp-content/uploads/' + params.imageUrl;

        console.log(payload.category);

        await db.categories.find({ where: { name: payload.category }})
            .then(function (category) {
                payload.categoryId = category.id;
                db.projects.create(payload);
            });

        db.projects
            .findAll({
                where: { title: payload.title },
                order: [ ['createdAt', 'DESC'] ],
                limit: 1
            })
            .then(function (project) {
                var stats = {
                    projectId: project[0].id,
                    donationStatus: 'active',
                    supporters: 0,
                    canDonate: payload.donateMore ? true : false,
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
