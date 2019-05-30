const _ = require('underscore');
const _resources = require('./resources');
const logger = require('./services/logger');
const handlers = require('./handlers');
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, file.originalname + '-' + Date.now())
    }
})
const upload = multer({ storage: storage });

const initRoute = (server, resources, parent) => {
    parent = parent || '';

    // Register resources
    _.each(resources, resource => {
        for (const endpoint in resource.endpoints) {
            let handlerMethod = resource.endpoints[endpoint];
            let parts = endpoint.split(' ');

            server[parts[0]](parent + resource.name + parts[1], upload.single('file'), async (req, res, next) => {
                try {
                    let result = await handlers[resource.name][handlerMethod](req.params, req);
                    res.send(result ? 200 : 404, result || 'Resource not found');
                } catch (err) {
                    logger.error(err);
                    if (err.notAllowed) {
                        res.send(401, 'User or password is incorrect');
                    } else {
                        res.send(500, 'Oops! Something went wrong..');
                    }
                }
                next();
            });

            if (resource.resources) {
                const _parent = resource.name + parts[1] + '/';
                initRoute(server, resource.resources, _parent);
            }
        }
    });
}

exports.init = (server) => {
    initRoute(server, _resources);
};
