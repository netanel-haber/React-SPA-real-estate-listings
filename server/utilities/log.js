const fs = require('fs').promises;
const path = require('path');

module.exports = async (toAppend) => {
    await fs.appendFile(path.join(__dirname, '..', 'logs.txt'), `${new Date().toString().split(" GMT")[0]} ${toAppend}\n`)
}