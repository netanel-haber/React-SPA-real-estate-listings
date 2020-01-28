require('dotenv').config();

const express = require('express');

const port = 3000;
const app = express();

// app.use(bodyParser.json());
// app.use('/', (req, res) => {
//     res.status(200).json({ ok: "ok" });
// });


app.use(express.static('build'));


app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
