const config = require('./config');
const restify = require('restify');
const plugins = restify.plugins;
const errs = require('restify-errors');
const logger = require('./services/logger');
const middleware = require('./middleware');

// Initialize Server
const server = restify.createServer();

// Plugins

// dedupe slashes in URL before routing
server.pre(restify.plugins.pre.dedupeSlashes());

// log requests
server.use((req, res, next) => {
  logger.info({
    method: req.method, 
    path: req.url, 
    params: req.params
  });
  return next();
});

server.use(plugins.jsonBodyParser({ mapParams: true }));
server.use(plugins.acceptParser(server.acceptable));
server.use(plugins.queryParser({ mapParams: true }));
server.use(plugins.fullResponse());

// Start server
server.listen(config.port, () => {
  logger.info('Server listening at port', config.port);
});

// Init middleware
middleware.init(server);