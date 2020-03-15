const { valPass } = require('../../client/src/validation/signup');


const combineMessages = require('../../client/src/validation/combineMessages');

const passwordMessages = {
    lowercase: "One lower-case letter",
    uppercase: "One upper-case letter",
    symbols: "must contain one of the following symbols: !@#$%^&*",
    digits: "One digit",
    spaces: "No spaces",
    min: "at least 8 characters"
}

const isValidPassword = (pass) => combineMessages(valPass(pass), passwordMessages, "password must meet the following requirements:")


module.exports = { isValidPassword };