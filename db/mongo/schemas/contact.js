const { Schema } = require('mongoose');
const { phoneNumber, email, name } = require('./users/validation');

module.exports = new Schema({
    name,
    lastName: name,
    phoneNumber,
    email
});