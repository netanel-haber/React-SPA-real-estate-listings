const { isEmail, isMobilePhone } = require('validator');

module.exports = {
    email: {
        type: String,
        validate: [isEmail, 'invalid email'],
        trim: true,
        lowercase: true,
        unique: true
    },
    phone: {
        type: [String],
        validate: [arr => arr.some(phone => !isMobilePhone(phone, 'he-IL')),
            "One or more phone numbers aren't valid!"]
    }
}