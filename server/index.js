require('dotenv').config();
const express = require('express');

const { DEV_SERVER_NODEMON_PORT: port } = process.env;

const app = express();


app.use('/api/test', (req, res) => {
    const apiTestString = "---testing api---";
    console.log(`sending (${apiTestString}) to front-end for api testing`);
    res.status(200).send(apiTestString);
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});


// prod:
// app.use(express.static('build'));