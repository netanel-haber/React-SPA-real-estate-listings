const { Schema } = require('mongoose');
const address = require('../addressSchema');
const { email, phone } = require('./validation');

let schema = new Schema({
    name: {
        type: String,
        // required: true
    },
    address: {
        type: address,
        // required:true
    },
    // email,
    phone
});


module.exports = schema;