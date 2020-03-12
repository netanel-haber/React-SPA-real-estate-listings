if (process.env.NODE_ENV !== "production")
    require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

app.use(require('./logger'), require('body-parser').json());
app.use('/api', require('./routers/api'));
app.use('/icons', require('./middleware/urlToLowerCase'), express.static(path.join(__dirname, 'icons')));

if (process.env.NODE_ENV === "production")
    require('./serveReact')(app);


const PORT = process.env.PORT;
app.listen(PORT, async () => {
    if (process.env.NODE_ENV !== "production") {
        const fs = require('fs').promises;
        const mergePaths = require('./express-reflection/mergePathsFile');
        const mapPath = path.join(__dirname, 'express-reflection', 'routemap.generated.txt');
        const validationPath = path.join(__dirname, 'express-reflection', 'paths_that_need_key_validation.generated.json');
        const { map, pathsWithKeyValidationFirewall: newValidationPaths } = require('express-print-clean-routes')(app);
        try {
            await fs.writeFile(mapPath, map);
            console.log("updated express route map.", mapPath);
            await fs.writeFile(validationPath, JSON.stringify(mergePaths(JSON.parse(await fs.readFile(validationPath)), newValidationPaths)));
            console.log("updated paths validation array.", validationPath)
        }
        catch (ex) {
            console.log(ex);
        }
    }
    console.log(`The server is running on port ${PORT}`);
});

