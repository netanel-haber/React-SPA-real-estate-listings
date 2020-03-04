const translateFilters = require('../utilities/mongoFilters');
const translateSorts = require('../utilities/mongoSort');

const translator = (req, res, next) => {
    try {
        req.filters = req.body.filters ? translateFilters(req.body.filters) : {};
        req.sorts = req.body.sorts ? translateSorts(req.body.sorts) : {};
        req.skip = req.body.skip || 0;
        req.limit = req.body.limit || 50;
        next();
    }
    catch (ex) {
        console.log(ex, "at error mongo middleware");
        return res.status(500).send(ex.toString())
    }
};


module.exports = { translator };