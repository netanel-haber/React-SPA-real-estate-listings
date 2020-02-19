let { isEmail, isMobilePhone, isURL } = require('validator');

const isMP = (pNumber) => isMobilePhone(pNumber, 'he-IL');
const PNValidator = (arr) => arr.every(isMP);


let exportFuncs = {
    email: {
        type: String,
        validate: [isEmail, 'invalid email']
    },
    phone: {
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


module.exports = exportFuncs;