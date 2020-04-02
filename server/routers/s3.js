const picturesRouter = require('express').Router();
const { userForGet } = require('../../db/s3/connection');
const { validateKeysExact } = require('../middleware/validateKeys');
const auth = require('../middleware/auth');
const getPostData = require('../../db/s3/uploadPics');




picturesRouter.post('/get-pic-urls', validateKeysExact, function getPicUrls(req, res) {
    const expiresInMinutes = 10;
    Promise.all(req.body.pictureKeys.map(Key =>
        userForGet.getSignedUrlPromise('getObject',
            { Key, Bucket: process.env.S3_USER_BUCKET, Expires: 60 * expiresInMinutes }
        )))
        .then(urls => { res.json(urls) })
        .catch(ex => { res.status(500).end() })
});

picturesRouter.get('/upload-data/:howmany', auth, async function getS3UploadUrls({ params: { howmany }, user: { _id } }, res) {
    try{
        res.json(getPostData(_id, howmany));
    }
    catch(ex){
        console.log(ex);
        res.status(500).end()
    }
});



module.exports = picturesRouter;