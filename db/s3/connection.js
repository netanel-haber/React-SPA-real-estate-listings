const S3 = require('aws-sdk/clients/s3');

module.exports = new S3({
    region: 'eu-central-1',
    credentials: {
        accessKeyId: process.env.S3_USER_GET_ACCESS_KEY_ID,
        secretAccessKey: process.env.S3_USER_GET_SECRET_ACCESS_KEY
    },
    params: { Bucket: process.env.S3_USER_BUCKET }
});


