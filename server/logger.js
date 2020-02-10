const log = require('./chalk');

module.exports = (req, res, next) => {
    log(`url:${req.originalUrl}. method:${req.method}`,"blue","bgWhite");
    next();
};
