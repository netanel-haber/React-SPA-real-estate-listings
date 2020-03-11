const path = require('path');
const express = require('express');
const serveStaticScripts = require('./middleware/serveStaticallyCompressedInstead');

module.exports = (app) => {
    const clientPath = path.join(__dirname, '../client', 'build');
    app.use('/', serveStaticScripts);
    app.use(express.static(clientPath));
    app.get('/*', function (req, res) {
        res.sendFile(path.join(clientPath, 'index.html'));
    });
}
