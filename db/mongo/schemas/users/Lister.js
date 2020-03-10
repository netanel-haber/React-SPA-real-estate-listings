const { Schema } = require('mongoose');
const { email, phoneNumber } = require('./validation');


module.exports = new Schema({
    email,
    name: String,
    lastName: String,
    phoneNumber,
    hash: String,
    salt: String,
    mitigatingCompanyId: Schema.Types.ObjectId
}, { timestamps: true });


