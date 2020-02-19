const { Schema } = require('mongoose');
const address = require('../addressSchema');
const { email, phone } = require('./validation');

module.exports = new Schema({
    name: String,
    lastName: String,
    birthday: Date,
    email,
    address,
    phone,
    hash: String,
    salt: String,
    mitigatingCompanyId: Schema.Types.ObjectId
});


