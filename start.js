const config = require('./config');
const restify = require('restify');
const plugins = restify.plugins;
const errs = require('restify-errors');
const logger = require('./services/logger');
const middleware = require('./middleware');
const db = require('./db/models');

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
server.use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
);

// Start server
server.listen(config.port, async () => {
  logger.info('Server listening at port', config.port);

  try {
    await db.sequelize.authenticate();
    logger.info('Connection to database has been established successfully.');
  } catch (err) {
    logger.error('Unable to connect to the database:', err);
  }
});

// Init middleware
middleware.init(server);