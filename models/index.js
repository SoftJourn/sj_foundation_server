const Projects = require('./projects');
const Comments = require('./comments');
const Users = require('./users');
const Categories = require('./categories');

module.exports = {
    projects : new Projects(),
    comments : new Comments(),
    users : new Users(),
    categories : new Categories()
};