'use strict'

const db = require('../db/models');

class ProjectStats {
  async getAll() {
    let res = await db.projectStats.findAll();
    return res;
  }
}

module.exports = ProjectStats;