const chalk = require('chalk');
module.exports = (str, color = "blue") => { console.log(chalk[color].inverse(str)) };