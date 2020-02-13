const { Schema } = require('mongoose');
const addressSchema = require('../addressSchema');
const { email, phone } = require('./validation/email');

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: addressSchema,
    phoneNumbers: [String],
    birthday: Date,
    email,
    phone,
    mitigatingCompanyId: Schema.Types.ObjectId
});


