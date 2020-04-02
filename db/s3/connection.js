const S3 = require('aws-sdk/clients/s3');

const userForGet = new S3({
    region: 'eu-central-1',
    credentials: {
        accessKeyId: process.env.S3_USER_GET_ACCESS_KEY_ID,
        secretAccessKey: process.env.S3_USER_GET_SECRET_ACCESS_KEY
    },
    params: { Bucket: process.env.S3_USER_BUCKET }
});


const userForPost = new S3({
    region: 'eu-central-1',
    credentials: {
        accessKeyId: process.env.S3_USER_PUT_ACCESS_KEY_ID,
        secretAccessKey: process.env.S3_USER_PUT_SECRET_ACCESS_KEY
    },
    params: { Bucket: process.env.S3_USER_BUCKET }
});


module.exports = { userForPost, userForGet }; 


