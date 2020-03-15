const passwordValidator = require('password-validator');
const passSchema = new passwordValidator()
    .is().min(8)
    .has().uppercase()
    .has().lowercase()
    .has().digits()
    .has().not().spaces()
    .has().symbols();
const valPass = (pass, list = true) => passSchema.validate(pass, { list });


const hebrewNameValidator = /^[\u0590-\u05fe']+$/

module.exports = { valPass, hebrewNameValidator }
