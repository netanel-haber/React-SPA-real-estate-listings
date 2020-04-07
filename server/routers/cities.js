const citiesRouter = require('express').Router();
const { validateKeysExact } = require('../middleware/validateKeys');
const { Cities } = require('../../db/mongo/index');
const { getMatchingStreets } = require('../../db/mongo/api/cities');

let cachedCities = [];
let cachedStreetsForCity = {};

let cachedStreetsSearch = {};
let cachedCitiesSearch = {};


citiesRouter
    .post('/cities/streets/search', validateKeysExact, async (req, res) => {
        try {
            const { term } = req.body;
            let regex = new RegExp(term);
            if (cachedStreetsSearch[term]) {
                res.json(cachedStreetsSearch[term])
            }
            else {
                let result = (await getMatchingStreets(regex))
                res.json(result);
                cachedStreetsSearch[term] = result;
            }
        }
        catch (ex) {
            res.status(500).end()
        }
    }
    )
    .post('/cities/streets', validateKeysExact, async (req, res) => {
        try {
            const { city } = req.body;
            if (cachedStreetsForCity[city])
                return res.json(cachedStreetsForCity[city])
            else {
                let result = (await Cities.findOne({ city }, 'streets').lean());
                res.json(result.streets);
                cachedStreetsForCity[city] = result.streets;
            }
        }
        catch (ex) {
            res.status(500).end()
        }
    })
    .post('/cities/search', validateKeysExact, async (req, res) => {
        try {
            const { term } = req.body;
            if (cachedCitiesSearch[term]) {
                return res.json(cachedCitiesSearch[term])
            }
            else {
                let regex = new RegExp(term);
                if (cachedCities.length === 0)
                    cachedCities = (await Cities.distinct('city'));
                let result = cachedCities.filter(city => regex.test(city));
                res.json(result);
                cachedCitiesSearch[term] = result;
            }
        }
        catch (ex) {
            res.status(500).end()
        }
    })
    .get('/cities', async (req, res) => {
        try {
            if (cachedCities.length > 0)
                res.json(cachedCities)
            else {
                let result = (await Cities.distinct('city'));
                res.json(result);
                cachedCities = result;
            }
        }
        catch (ex) {
            res.status(500).end()
        }
    })





module.exports = citiesRouter;