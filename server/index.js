if (process.env.NODE_ENV !== "production")
    require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();


app.use(require('./logger'));
app.use(require('body-parser').json());
app.use('/api', require('./routers/api'));
app.use('/icons', express.static(path.join(__dirname, 'icons')));


if (process.env.NODE_ENV === "production")
    require('./serveReact')(app);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});

