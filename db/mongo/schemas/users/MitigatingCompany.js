const { Schema } = require('mongoose');
const address = require('../addressSchema');
const { phoneNumbers, website, email } = require('./validation');

let schema = new Schema({
    name: String,
    address,
    email,
    phoneNumbers,
    website
});


module.exports = schema;