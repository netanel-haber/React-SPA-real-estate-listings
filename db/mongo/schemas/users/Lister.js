const { Schema } = require('mongoose');
const { hash, salt } = require('./validation');
const contact = require('../contact');

module.exports = new Schema({
    contact,
    hash,
    salt,  
    tokens: [String],
    mitigatingCompanyId: Schema.Types.ObjectId
}, { timestamps: true });


