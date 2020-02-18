const { ForsaleListing, RentListing, CommercialListing, RoommatesListing: RoommateListing, Lister, MitigatingCompany } = require('../../db/mongo');
const mongoRouter = require('express').Router();
const { getTopLevel, getBottomLevel, countDocs } = require('../../db/mongo/api/find');
const translateFilters = require('../utilities/mongoFilters');


mongoRouter.use((req, res, next) => {
    try {
        req.filters = translateFilters(req.body);
    }
    catch (ex) {
        res.status(500).send(ex.toString())
    }
    next();
});


mongoRouter.post('/:type', async (req, res) => {
    res.json(await getTopLevel(req.params.type, req.filters));
})

mongoRouter.get('/:type/spec/:id', async (req, res) => {
    res.json(await getBottomLevel(req.params.type, req.params.id));
})

mongoRouter.get('/:type/count', async (req, res) => {
    res.json(await countDocs(req.params.type));
})


module.exports = mongoRouter;