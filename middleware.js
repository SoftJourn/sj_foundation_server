const _ = require('underscore');
const _resources = require('./resources');
const logger = require('./services/logger');
const handlers = require('./handlers');

const initRoute = (server, resources, parent) => {
    parent = parent || '';

    // Register resources
    _.each(resources, resource => {
        for (const endpoint in resource.endpoints) {
            let handlerMethod = resource.endpoints[endpoint];
            let parts = endpoint.split(' ');

            server[parts[0]](parent + resource.name + parts[1], function(req, res, next) {
                let result = handlers[resource.name][handlerMethod](req.params);
                res.send(result);
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


