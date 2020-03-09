const path = require('path');
const clientPath = path.join(__dirname, '../../client', 'build');
const fs = require('fs');

module.exports = (req, res, next) => {
    if (/\.js$/.test(req.originalUrl) && req.headers["accept-encoding"].includes("gzip")) {
        const gzippedPath = path.join(clientPath, req.originalUrl + '.gz');
        if (fs.existsSync(gzippedPath)) {
            res.set("Content-Encoding", "gzip");
            return res.sendFile(gzippedPath);
        }
    }
    next();
};