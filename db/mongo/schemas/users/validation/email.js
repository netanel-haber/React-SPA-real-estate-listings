const { isEmail } = require('validator');

module.exports = {
    type: String,
    validate: [isEmail, 'invalid email'],
    trim: true,
    lowercase: true,
    unique: true,
}