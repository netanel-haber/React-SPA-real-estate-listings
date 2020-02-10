const apiRouter = require('express').Router();
const s3Router = require('./s3');

apiRouter.get('/test', (req, res) => {
    res.send("testing api complete");
});

apiRouter.use('/s3', s3Router);


module.exports = apiRouter;