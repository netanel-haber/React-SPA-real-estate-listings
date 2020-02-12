const apiRouter = require('express').Router();
const s3Router = require('./s3');
const mongoRouter = require('./mongo');

apiRouter.get('/test', (req, res) => {
    res.send("testing api complete");
});

apiRouter.use('/s3', s3Router);

apiRouter.use('/mongo', mongoRouter);


module.exports = apiRouter;