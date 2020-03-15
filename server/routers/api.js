const apiRouter = require('express').Router();
const pictureRouter = require('./s3');
const listingsRouter = require('./listings');
const listersRouter = require('./listers');


apiRouter.get('/test', function test(req, res) {
    res.send("testing api complete");
});

apiRouter.use('/pics', pictureRouter);
apiRouter.use(listingsRouter);
apiRouter.use(listersRouter);

module.exports = apiRouter;