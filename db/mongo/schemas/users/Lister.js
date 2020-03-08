const { Schema } = require('mongoose');
const { email } = require('./validation');

module.exports = new Schema({
    email,
    hash: String,
    salt: String,
    mitigatingCompanyId: Schema.Types.ObjectId
}, { timestamps: true });


