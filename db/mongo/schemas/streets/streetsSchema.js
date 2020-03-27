const { Schema } = require('mongoose');

module.exports = new Schema({
    city: String,
    streets: [String]
});