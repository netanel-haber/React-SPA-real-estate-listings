require('dotenv').config();
const express = require('express');
console.log(process.env);

const { DEV_SERVER_NODEMON_PORT: port } = process.env;

const app = express();


app.use('/a', (req, res) => {
    console.log('here');
    res.status(200).json({ ok: "ok" });
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});



// app.use(express.static('build'));