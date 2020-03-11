const s3Router = require('express').Router();
const s3Get = require('../../db/s3/connection');


s3Router.post('/get-pic-urls', function getPicUrls(req, res) {
    const expiresInMinutes = 10;
    Promise.all(req.body.map(Key =>
        s3Get.getSignedUrlPromise('getObject',
            { Key, Bucket: process.env.S3_USER_BUCKET, Expires: 60 * expiresInMinutes }
        )))
        .then(urls => { res.json(urls) })
        .catch(ex => { res.status(500).send() })
});




module.exports = s3Router;