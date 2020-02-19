const mongoRouter = require('express').Router();
const { getTopLevel, getBottomLevel, getLister, countDocs } = require('../../db/mongo/api/find');
const { translator } = require('./mongoMiddleware');


mongoRouter.use(translator);
mongoRouter.get('/listings/:type/count', async (req, res) => {
    res.json(await countDocs(req.params.type));
})
mongoRouter.get('/listings/:type/:id/rest', async (req, res) => {
    res.json(await getBottomLevel(req.params.type, req.params.id));
})
mongoRouter.post('listings/:type', async (req, res) => { 
    res.json(await getTopLevel(req.params.type, req.filters));
})
mongoRouter.get('/listers/:id', async (req, res) => {
    res.json(await getLister(req.params.type));
})

module.exports = mongoRouter;