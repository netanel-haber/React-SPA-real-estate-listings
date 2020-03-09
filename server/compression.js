const compression = require('compression');

function compMW(req, res) {
    console.log(req.headers);
    return false;
}

module.exports = compression()