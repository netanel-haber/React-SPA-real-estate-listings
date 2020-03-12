const fs = require('fs').promises;
const path = require('path');
const mergePaths = require('./express-reflection/mergePathsFile');
const mapPath = path.join(__dirname, 'express-reflection', 'routemap.generated.txt');
const validationPath = path.join(__dirname, 'express-reflection', 'paths_that_need_key_validation.generated.json');

module.exports = async (app) => {
    const { map, pathsWithKeyValidationFirewall: newValidationPaths } = require('express-print-clean-routes')(app);
    try {
        await fs.writeFile(mapPath, map);
        console.log("updated express route map.", mapPath);
        await fs.writeFile(validationPath, JSON.stringify(mergePaths(JSON.parse(await fs.readFile(validationPath)), newValidationPaths), null, 4));
        console.log("updated paths validation array.", validationPath)
    }
    catch (ex) {
        console.log(ex);
    }
}