const { Schema } = require('mongoose');
const { email, phoneNumber, hash, salt, name } = require('./validation');


module.exports = new Schema({
    hash,
    salt,
    email,
    phoneNumber,
    name,
    lastName: name,
    tokens: [String],
    mitigatingCompanyId: Schema.Types.ObjectId
}, { timestamps: true });


