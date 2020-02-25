const mongoRouter = require('express').Router();
const { getTopLevel, getBottomLevel, getLister, countDocs } = require('../../db/mongo/api/find');
const { translator } = require('./mongoMiddleware');


mongoRouter.use(translator);

mongoRouter.post('/listings/count/:type', async (req, res) => {
    res.json(await countDocs(req.params.type, req.filters));
})


mongoRouter.get('/listings/:type/:id', async (req, res) => {
    res.json(await getBottomLevel(req.params.type, req.params.id));
})


mongoRouter.use('/listings/:type', async (req, res) => {
    res.json(await getTopLevel(req.params.type, req.filters, req.options));
})


mongoRouter.get('/listers/:id', async (req, res) => {
    res.json(await getLister(req.params.id));
})

module.exports = mongoRouter;