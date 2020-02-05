require('dotenv').config();


const S3 = require('aws-sdk/clients/s3');
const userGet = new S3({
    region: 'eu-central-1',
    bucket: process.env.S3_USER_BUCKET,
    credentials: {
        accessKeyId: process.env.S3_USER_GET_ACCESS_KEY_ID,
        secretAccessKey: process.env.S3_USER_GET_SECRET_ACCESS_KEY
    }
});


const { DEV_SERVER_NODEMON_PORT: port } = process.env;



const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});
app.use(bodyParser.json());


app.use('/api/test', (req, res) => {
    res.status(200).send("testing api complete");
});
app.use('/api/get-pic-urls', async (req, res) => {
    const expiresInMinutes = 10;
    let urls = "no success";
    try {
        urls = await Promise.all(req.body.map(Key => userGet.getSignedUrlPromise('getObject', { Key, Bucket: process.env.S3_USER_BUCKET, Expires: 60*expiresInMinutes })));
        res.json(urls);
    }
    catch (ex) {
        res.status(500).send();
    }
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});




// prod:
// app.use(express.static('build'));