const path = require('path');
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({filename: path.join(__dirname, '../../logs/error.log'), level: 'error'}),
        new winston.transports.File({filename: path.join(__dirname, '../../logs/combined.log')}), // Log all levels
        new winston.transports.Console()
    ]
});

module.exports = logger;
