const { get, post } = require('../chalks');

const logger = (req, res, next) => {
    let presentation;
    switch (req.method) {
        case "GET":
            presentation = get
            break;
        case "POST":
            presentation = post
            break;
    }
    console.log(presentation(`${req.method} ${req.originalUrl}`));
    next();
};



module.exports = logger;