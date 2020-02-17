const { Schema } = require('mongoose');
const address = require('../addressSchema');
const { email, phone } = require('./validation');

module.exports = new Schema({
    name: {
        type: String,
        // required: true
    },
    lastName: {
        type: String,
        // required: true
    },   
    phoneNumbers: [String],
    birthday: Date,
    address,
    // email,
    phone,
    hash: {
        type: String,
        // required: true,
        // unique: true
    },
    salt: {
        type: String,
        // required: true,
        // unique: true
    },
    mitigatingCompanyId: Schema.Types.ObjectId
});


