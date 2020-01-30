require('dotenv').config();
const express = require('express');

const { DEV_SERVER_NODEMON_PORT: port } = process.env;

const app = express();


app.use('/api/test', (req, res) => {
    console.log('test ok');
    res.status(200).send("---testing api---");
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});


// prod:
// app.use(express.static('build'));