module.exports = (req, res, next) => {
    req.originalUrl = req.originalUrl.toLowerCase();
    next();
}