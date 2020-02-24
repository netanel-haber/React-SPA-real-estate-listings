const translateFilters = require('../utilities/mongoFilters');
const translator = (req, res, next) => {
    try {
        if (req.filters)
            req.filters = translateFilters(req.body.filters);
    }
    catch (ex) {
        console.log('here');
        res.status(500).send(ex.toString())
    }
    next();
};


module.exports = { translator };