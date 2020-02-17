const { isEmail, isMobilePhone } = require('validator');

module.exports = {
    email: {
        type: String,
        validate: [isEmail, 'invalid email'],
        trim: true,
        lowercase: true,
        default:""
        // unique: true
    },
    phone: {
        type: [String],
        validate: [arr => arr.length === 0 || arr.some(phone => !isMobilePhone(phone, 'he-IL')),
            "One or more phone numbers aren't valid!"]
    }
}