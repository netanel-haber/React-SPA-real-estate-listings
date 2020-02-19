const { Schema } = require('mongoose');
const { phoneNumber, email } = require('./users/validation');

module.exports = new Schema({
    name: String,
    phoneNumber,
    email
})