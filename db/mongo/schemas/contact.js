const { Schema } = require('mongoose');
const { phone, email } = require('./users/validation');

module.exports = new Schema({
    name: String,
    phone,
    email
})