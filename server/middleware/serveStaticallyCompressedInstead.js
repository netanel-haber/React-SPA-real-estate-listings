const path = require('path');
const clientPath = path.join(__dirname, '../../client', 'build');
const fs = require('fs');

module.exports = (req, res, next) => {
    if (/\.(js)|(css)$/i.test(req.originalUrl) && req.headers["accept-encoding"].includes("gzip")) {
        const gzippedPath = path.join(clientPath, req.originalUrl + '.gz');
        if (fs.existsSync(gzippedPath)) {
            req.url = req.originalUrl + '.gz';
            res.set("Content-Encoding", "gzip");
            res.set("Content-Type", 'application/javascript');
            if (req.originalUrl.includes("css"))
                res.set("Content-Type", "text/css")
        }
    }
    next();
};