const fs = require('fs').promises;
const path = require('path');

module.exports = async (toAppend, timestamp) => {
    await fs.appendFile(path.join(__dirname, '..', 'logs.txt'), `${timestamp} ${toAppend}\n`)
}