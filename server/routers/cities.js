const citiesRouter = require('express').Router();
const { validateKeysExact } = require('../middleware/validateKeys');
const { Cities } = require('../../db/mongo/index');



let cachedAllStreets;
citiesRouter.get('/cities/streets/all', async (req, res) => {
    if (cachedAllStreets)
        return res.json(cachedAllStreets)
    else {
        let result = (await Cities.find({}, 'streets').lean());
        if (result) {
            res.json(result);
            return cachedAllStreets = result;
        }
    }
    res.send([]);
})




let cachedStreetsForCity = {};
citiesRouter.post('/cities/streets', validateKeysExact, async (req, res) => {
    const { city } = req.body;
    if (cachedStreetsForCity[city])
        return res.json(cachedStreetsForCity[city])
    else {
        let result = (await Cities.findOne({ city }, 'streets').lean());
        if (result) {
            res.json(result.streets);
            return cachedStreetsForCity[city] = result.streets;
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