const { isMobilePhone } = require('validator');

module.exports = {
    type: [String],
    validate: [arr => arr.some(phone => !isMobilePhone(phone, 'he-IL')),
        "One or more phone numbers aren't valid!"]
}