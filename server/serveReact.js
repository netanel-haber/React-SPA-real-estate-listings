const path = require('path');
const express = require('express');

module.exports = (app) => {
    const clientPath = path.join(__dirname, '../client', 'build');
    app.use(express.static(clientPath));
    app.get('/', function (req, res) {
        res.sendFile(path.join(clientPath, 'index.html'));
    });
}