const mongoRouter = require('express').Router();
const { getTopLevel, getBottomLevel, getLister, countDocs } = require('../../db/mongo/api/find');
const { translator } = require('../middleware/mongoTranslator');
const { validateKeys } = require('../middleware/validateKeys');

mongoRouter.use(translator);

mongoRouter.post('/listings/count/:type', validateKeys, async function countListings(req, res) {
    res.json(await countDocs(req.params.type, req.filters));
})

mongoRouter.get('/listings/:type/:id', async function getListing(req, res) {
    res.json(await getBottomLevel(req.params.type, req.params.id));
})

mongoRouter.post('/listings/:type', validateKeys, async function getListings(req, res) {
    res.json(await getTopLevel(req.params.type, req.filters, req.sorts, req.skip, req.limit));
})

mongoRouter.get('/listers/:id', async function getIndividualLister(req, res) {
    res.json(await getLister(req.params.id));
})

module.exports = { mongoRouter };