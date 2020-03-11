if (process.env.NODE_ENV !== "production")
    require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

app.use(require('./logger'), require('body-parser').json());
app.use('/api', require('./routers/api'));
app.use('/icons', require('./middleware/urlToLowerCase'), express.static(path.join(__dirname, 'icons')));

if (process.env.NODE_ENV === "production")
    require('./serveReact')(app);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    if (process.env.NODE_ENV !== "production")
        require('express-print-routes')(app, path.join(__dirname, 'express.routes.generated.txt'));
    console.log(`The server is running on port ${PORT}`);
});

