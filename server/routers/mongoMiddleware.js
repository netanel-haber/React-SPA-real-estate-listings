const translateFilters = require('../utilities/mongoFilters');
const translator = (req, res, next) => {
    try {
        req.filters = translateFilters(req.body);
    }
    catch (ex) {
        res.status(500).send(ex.toString())
    }
    next();
};


module.exports = { translator };