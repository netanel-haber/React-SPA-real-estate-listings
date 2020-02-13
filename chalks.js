const c = require('chalk');
module.exports = {
    success: c.gray.dim.bgGreen,
    failure: c.gray.dim.bgRed,
    get: c.bgMagenta.gray,
    post: c.bgBlueBright.gray
}