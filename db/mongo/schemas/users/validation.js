let { isEmail, isMobilePhone, isURL } = require('validator');
const isMP = (pNumber) => isMobilePhone(pNumber, 'he-IL');
const PNValidator = (arr) => arr.every(isMP);
const { hebrewNameValidator } = require('../../../../client/src/validation/signup');

const unique = true, required = true;

module.exports = {
    email: {
        type: String,
        validate: [isEmail, 'invalid email'],
        required
    },
    hash: {
        type: String,
        unique,
    },
    salt: {
        type: String,
    },
    name: {
        type: String,
        validate: [(v) => hebrewNameValidator.test(v), "not a valid Hebrew name!"]
    },
    phoneNumber: {
        type: String,
        validate: [isMP, "not a valid phone number!"]
    },
    phoneNumbers: {
        type: [String],
        validate: [PNValidator, "One or more phone numbers aren't valid!"]
    },
    website: {
        type: String,
        validate: [isURL, "not a valid url"]
    }
}