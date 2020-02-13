require('dotenv').config();
const c = require('chalk');
const express = require('express');
const app = express();


app.use(require('./logger'));
app.use(require('body-parser').json());
app.use('/api', require('./routers/api'));
app.use('/icons', express.static(__dirname + '/icons'));



const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(c.bgGreen.gray(`The server is running on port ${PORT}`));
});






// prod:
// app.use(express.static('build'));