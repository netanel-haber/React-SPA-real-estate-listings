const log = require('./utilities/log');


const logger = (req, res, next) => {
    let timestamp = new Date().toString().split(" GMT")[0];
    log(`${req.method} ${req.originalUrl}`, timestamp);
    const oldSend = res.send;
    res.send = function (data) {
        log(`${req.method} ${req.originalUrl}: ${data} \n`, timestamp)
        oldSend.call(res, data);
    }
    next();
};



module.exports = logger;