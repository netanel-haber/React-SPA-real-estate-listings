const fs = require('fs').promises;
const path = require('path');
const log = require('../utilities/log');
const keyMapPath = path.join(__dirname, "..", "express-reflection", "paths_that_need_key_validation.generated.json");



function areArraysExactlyEqual(valid, actual) {
    return valid.length === actual.length && actual.filter(key => !valid.includes(key)).length === 0;
}


async function validateKeys(req, res, next) {
    try {
        const validKeysForPath = JSON.parse(await fs.readFile(keyMapPath))[req.route.path];
        const currentKeys = Object.keys(req.body);
        const invalidKeys = currentKeys.filter(key => !validKeysForPath.includes(key));
        if (invalidKeys.length !== 0) {
            res.status(404).json({ invalidKeys });
            return log(`inexact key check disparity. original url: ${req.originalUrl}. current path: ${req.route.path}. invalid keys: ${invalidKeys}`);
        }
        next();
    }
    catch (ex) {
        console.log(ex)
        return res.status(500);
    }
}


async function validateKeysExact(req, res, next) {
    try {
        const validKeysForPath = JSON.parse(await fs.readFile(keyMapPath))[req.route.path];
        const currentKeys = Object.keys(req.body);
        if (!areArraysExactlyEqual(validKeysForPath, currentKeys)) {
            res.status(404).json({ validKeysForPath });
            return log(`exact key check disparity. original url: ${req.originalUrl}. current path: ${req.route.path}. current keys: ${currentKeys}`);
        }
        next();
    }
    catch (ex) {
        console.log(ex)
        return res.status(500);
    }
}


module.exports = { validateKeys, validateKeysExact };

