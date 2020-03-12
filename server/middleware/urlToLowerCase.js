module.exports = function urlToLowerCase (req, res, next) {
    req.originalUrl = req.originalUrl.toLowerCase();
    next();
}