const S3 = require('aws-sdk/clients/s3');

const s3 = new S3({
    region: 'eu-central-1',
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
    },
    params: { Bucket: 'nadlan' }
});


// writing image
const uploadImageToS3 = async (imageBinary, key) => {
    try {
        await s3.upload({
            Body: imageBinary,
            Key: key,
        }).promise()
    }
    catch (err) {
        console.log(err);
    }
}


const readImageFromS3 = async (Key) => {
    try {
        let data = await s3.getObject({ Key }).promise();
        return data.body;
    }
    catch (ex) {
        console.log(ex);
    }
};

