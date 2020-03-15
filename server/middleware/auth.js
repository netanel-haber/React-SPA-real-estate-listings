const { verifyToken } = require('../utilities/jwt');


module.exports = async function auth(req, res, next) {
    try {
        req.token = req.headers['authorization'].split(' ')[1];
        req.decoded = await verifyToken(req.token);
        return next();
    }
    catch (ex) {
        return res.status(403).json({ error: "could not verify token" });
    }
}