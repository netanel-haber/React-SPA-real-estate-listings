const mongoRouter = require('express').Router();
const { getTopLevel, getBottomLevel, getLister, countDocs } = require('../../db/mongo/api/find');
const { translator } = require('../middleware/mongoM');


mongoRouter.use(translator);

mongoRouter.post('/listings/count/:type', async (req, res) => {
    res.json(await countDocs(req.params.type, req.filters));
})

mongoRouter.get('/listings/:type/:id', async (req, res) => {
    res.json(await getBottomLevel(req.params.type, req.params.id));
})

mongoRouter.post('/listings/:type', async (req, res) => {
    res.json(await getTopLevel(req.params.type, req.filters, req.sorts, req.skip, req.limit));
})

mongoRouter.get('/listers/:id', async (req, res) => {
    res.json(await getLister(req.params.id));
})

module.exports = mongoRouter;