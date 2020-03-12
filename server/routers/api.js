const apiRouter = require('express').Router();
const s3Router = require('./s3');
const { mongoRouter } = require('./mongo');
const usersRouter = require('./users');



apiRouter.get('/test', function test(req, res) {
    res.send("testing api complete");
});

apiRouter.use('/pics', s3Router);


apiRouter.use('/data', mongoRouter);


apiRouter.use('/users', usersRouter);

module.exports = apiRouter;