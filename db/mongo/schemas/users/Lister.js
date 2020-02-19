const { Schema } = require('mongoose');
const address = require('../addressSchema');
const { email, phoneNumber } = require('./validation');

module.exports = new Schema({
    name: String,
    lastName: String,
    birthday: Date,
    email,
    address,
    phoneNumber,
    hash: String,
    salt: String,
    mitigatingCompanyId: Schema.Types.ObjectId
});


