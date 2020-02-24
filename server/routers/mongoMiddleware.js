const translateFilters = require('../utilities/mongoFilters');
// const translateSort = require('../utilities/mongoSort');

const translator = (req, res, next) => {
    try {
        req.filters = req.body.filters ? translateFilters(req.body.filters) : {};
        req.options = req.body.options || {};
    }
    catch (ex) {
        res.status(500).send(ex.toString())
    }
    next();
};


module.exports = { translator };