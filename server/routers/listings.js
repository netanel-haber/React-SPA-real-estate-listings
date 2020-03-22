const listingsRouter = require('express').Router();
const { getTopLevel, getBottomLevel, countDocs, getAllListingsForLister } = require('../../db/mongo/api/listings');
const { translator } = require('../middleware/mongoTranslator');
const { validateKeys } = require('../middleware/validateKeys');


listingsRouter
    .use(translator)
    .post('/listings/count/:type', validateKeys, async function countListings(req, res) {
        res.json(await countDocs(req.params.type, req.filters));
    })
    .get('/listings/:type/:id', async function getListing(req, res) {
        res.json(await getBottomLevel(req.params.type, req.params.id));
    })
    .post('/listings/:type', validateKeys, async function getListings(req, res) {
        res.json(await getTopLevel(req.params.type, req.filters, req.sorts, req.skip, req.limit));
    })



module.exports = listingsRouter;