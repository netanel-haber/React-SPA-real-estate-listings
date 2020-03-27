const citiesRouter = require('express').Router();
const { validateKeysExact } = require('../middleware/validateKeys');
const { Cities } = require('../../db/mongo/index');


let cachedStreets = {};
citiesRouter.post('/cities/streets', validateKeysExact, async (req, res) => {
    const { city } = req.body;
    if (cachedStreets[city])
        return res.json(cachedStreets[city])
    else {
        let result = (await Cities.findOne({ city }, 'streets').lean());
        if (result) {
            res.json(result.streets);
            return cachedStreets[city] = result.streets;
        }
    }
    res.send([]);
})

let cachedCities;
citiesRouter.get('/cities', async (req, res) => {
    if (cachedCities)
        res.json(cachedCities)
    else {
        let result = (await Cities.distinct('city'));
        res.json(result);
        return cachedCities = result;
    }
})


module.exports = citiesRouter;