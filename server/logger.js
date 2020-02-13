const { get, post } = require('../chalks');


module.exports = (req, res, next) => {
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
