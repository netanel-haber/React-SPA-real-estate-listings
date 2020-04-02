const passwordValidator = require('password-validator');


const combineMessages = (validationArr, messages, prefix) => {
    const result = `${prefix}${validationArr.map(inval => messages[inval]).join(", ")}`
    return (result === prefix) || result;
}

const passSchema = new passwordValidator()
    .is().min(8)
    .has().uppercase()
    .has().lowercase()
    .has().digits()
    .has().not().spaces()
    .has().symbols()
    .is().not().oneOf([""]);


const isValidPassword = (pass) => combineMessages(passSchema.validate(pass, { list: true }), {
    lowercase: "One lower-case letter",
    uppercase: "One upper-case letter",
    symbols: "must contain one of the following symbols: !@#$%^&*",
    digits: "One digit",
    spaces: "No spaces",
    min: "at least 8 characters",
    oneOf: "musn't be empty"
},
    "password must meet the following requirements:")


module.exports = { isValidPassword };