const picturesRouter = require('express').Router();
const s3Get = require('../../db/s3/connection');
const { validateKeysExact } = require('../middleware/validateKeys');

picturesRouter.post('/get-pic-urls', validateKeysExact, function getPicUrls(req, res) {
    const expiresInMinutes = 10;
    Promise.all(req.body.pictureKeys.map(Key =>
        s3Get.getSignedUrlPromise('getObject',
            { Key, Bucket: process.env.S3_USER_BUCKET, Expires: 60 * expiresInMinutes }
        )))
        .then(urls => { res.json(urls) })
        .catch(ex => { res.status(500).end() })
});




module.exports = picturesRouter;