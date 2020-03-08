const { Schema } = require('mongoose');
const address = require('../addressSchema');
const { email, phoneNumber } = require('./validation');

module.exports = new Schema({
    email,
    hash: String,
    salt: String,
    mitigatingCompanyId: Schema.Types.ObjectId
}, { timestamps: true });


