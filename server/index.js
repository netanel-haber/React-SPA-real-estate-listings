require('dotenv').config(); //in production (at least in heroku) this will not register any .env files, since they are gitignored

const c = require('chalk');
const express = require('express');
const path = require('path');
const app = express();

app.use(require('./logger'));
app.use(require('body-parser').json());
app.use('/api', require('./routers/api'));
app.use('/icons', express.static(__dirname + '/icons'));


if (process.env.NODE_ENV === "production") {
    const clientPath = path.join(__dirname, '../client', 'build');
    app.use(express.static(clientPath));
    app.get('/', function (req, res) {
        res.sendFile(path.join(clientPath, 'index.html'));
    });
}



const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
    console.log(c.bgGreen.gray(`The server is running on port ${PORT}`));
});

