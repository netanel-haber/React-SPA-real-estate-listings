const path = require('path');
const clientPath = path.join(__dirname, '../client', 'build');

module.exports = (req, res, next) => {
    if (/\.js$/.test(req.originalUrl) && req.headers["accept-encoding"].includes("gzip")) {
        res.set("Content-Encoding", "gzip");
        return res.sendFile(path.join(clientPath, req.originalUrl + '.gz'));
    }
    next();
};