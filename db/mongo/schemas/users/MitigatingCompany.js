const { Schema } = require('mongoose');
const address = require('../addressSchema');
const { email, phone } = require('./validation');

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type:address,
        required:true
    },
    email,
    phone
});