const { verifyToken } = require('../utilities/hash_salt');


module.exports = async (req, res, next) => {
    try {
        req.decoded = await verifyToken(req.headers['authorization'].split(' ')[1]);
        return next();
    }
    catch (ex) {
        return res.status(404).send("could not verify token");
    }
}