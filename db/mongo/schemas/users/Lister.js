const { Schema } = require('mongoose');
const { email, phoneNumber } = require('./validation');

const unique = true;

module.exports = new Schema({
    email,
    name: String,
    lastName: String,
    phoneNumber,
    hash: {
        type: String,
        unique
    },
    salt: {
        type: String,
        unique
    },
    tokens: [String],
    mitigatingCompanyId: Schema.Types.ObjectId
}, { timestamps: true });


