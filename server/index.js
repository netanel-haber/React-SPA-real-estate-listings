if (process.env.NODE_ENV !== "production")
    require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

app.use(require('./logger'), require('body-parser').json());
app.use('/api', require('./routers/api'));
app.use('/icons', require('./middleware/urlToLowerCase'), express.static(path.join(__dirname, 'icons')));
app.use('/json', require('compression')(), require('./middleware/urlToLowerCase'), express.static(path.join(__dirname, 'json')));

if (process.env.NODE_ENV === "production")
    require('./serveReact')(app);


const PORT = process.env.PORT;
app.listen(PORT, async () => {
    if (process.env.NODE_ENV !== "production") require('./express-reflection/reflect')(app);
    console.log(`The server is running on port ${PORT}`);
});

