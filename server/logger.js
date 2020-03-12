const { get, post } = require('../chalks');
const log = require('./utilities/log');

const logger = (req, res, next) => {
    log(`${req.method} ${req.originalUrl}`);
    next();
};



module.exports = logger;