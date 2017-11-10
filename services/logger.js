const bunyan = require('bunyan');

const logger = bunyan.createLogger({
    name: "server",
    serializers: bunyan.stdSerializers
});

module.exports = logger;