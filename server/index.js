if (!process.env.NODE_ENV) {
    require('dotenv').config();
}

const c = require('chalk');
const express = require('express');
const app = express();
app.use(require('./logger'));
app.use(require('body-parser').json());
app.use('/api', require('./routers/api'));
if (process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + '/client/build'));
}
app.use('/icons', express.static(__dirname + '/icons'));



const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
    console.log(c.bgGreen.gray(`The server is running on port ${PORT}`));
});

