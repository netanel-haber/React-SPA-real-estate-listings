const passwordValidator = require('password-validator');
const passSchema = new passwordValidator()
    .is().min(8)
    .has().uppercase()
    .has().lowercase()
    .has().digits()
    .has().not().spaces()
    .has().symbols()
    .is().not().oneOf([""]);
const valPass = (pass, list = true) => passSchema.validate(pass, { list });


const isHebrewName = /^[\u0590-\u05fe']+$/

module.exports = { valPass, isHebrewName }
