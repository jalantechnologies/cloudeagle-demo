const winston = require('winston');
const config = require('config');

const DEFAULT_LOG_LEVEL = 'info';

// load values from config
const LOGGER_CONSOLE = config.get('logger.console') === true;

// init log transports
const transports = [];

// register console transport if allowed
if (LOGGER_CONSOLE) {
  transports.push(new winston.transports.Console());
}

// expose winston logger
module.exports = new winston.Logger({
  level: DEFAULT_LOG_LEVEL,
  transports,
});
