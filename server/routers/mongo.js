const mongoRouter = require('express').Router();
const { getTopLevel, getBottomLevel, getLister, countDocs } = require('../../db/mongo/api/find');
const { translator } = require('../middleware/mongoM');


mongoRouter.use(translator);

mongoRouter.post('/listings/count/:type', async function countListings(req, res) {
    res.json(await countDocs(req.params.type, req.filters));
})

mongoRouter.get('/listings/:type/:id', async function getListing(req, res) {
    res.json(await getBottomLevel(req.params.type, req.params.id));
})

mongoRouter.post('/listings/:type', async function getListings(req, res) {
    res.json(await getTopLevel(req.params.type, req.filters, req.sorts, req.skip, req.limit));
})

mongoRouter.get('/listers/:id', async function getIndividualLister(req, res) {
    res.json(await getLister(req.params.id));
})

module.exports = { mongoRouter };