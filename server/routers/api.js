const apiRouter = require('express').Router();
const pictureRouter = require('./s3');
const listingsRouter = require('./listings');
const listersRouter = require('./listers');
const citiesRouter = require('./cities');
const compression = require('compression')();

apiRouter.get('/test', function test(req, res) {
    res.send("testing api complete");
});

apiRouter.use('/pics', pictureRouter);
apiRouter.use(compression, listingsRouter);
apiRouter.use(listersRouter);
apiRouter.use(compression, citiesRouter);


module.exports = apiRouter;