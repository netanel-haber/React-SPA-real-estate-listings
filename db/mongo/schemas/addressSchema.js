const { Schema } = require('mongoose');
module.exports = new Schema({
    municipality: {
        type: String,
        required: true
    },
    area: String,
    street: String,
    number: Number,
    apt: Number
})