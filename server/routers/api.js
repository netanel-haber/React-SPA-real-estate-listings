const apiRouter = require('express').Router();
const s3Router = require('./s3');
const mongoRouter = require('./mongo');

apiRouter.get('/test', (req, res) => {
    res.send("testing api complete");
});

apiRouter.use('/pics', s3Router);

apiRouter.use('/data', mongoRouter);


module.exports = apiRouter;