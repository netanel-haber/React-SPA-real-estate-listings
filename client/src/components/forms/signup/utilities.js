import isEmail from 'validator/es/lib/isEmail';
import isEmpty from 'validator/es/lib/isEmpty';
import isMobilePhone from 'validator/es/lib/isMobilePhone';
import combineMessages from '../../../validation/combineMessages';
import { valPass, nameValidator } from '../../../validation/signup';
import { errHebrew } from './heb';


const { HEB_INVALID_EMAIL, HEB_FIELD_IS_REQUIRED, HEB_PASS_DOESNT_MATCH, HEB_PHONE_ISNT_VALID, HEB_NAME_INVALID, passwordErrMessages } = errHebrew;

const hebrewNameValidator = (val) => nameValidator.test(val)

const validationConfig = {
    email: {
        required: HEB_FIELD_IS_REQUIRED,
        validate: value => isEmail(value) || HEB_INVALID_EMAIL
    },
    password: {
        required: HEB_FIELD_IS_REQUIRED,
        validate: (val) => combineMessages(valPass(val), passwordErrMessages, "על הסיסמה: ")
    },
    reEnter: (ref) => ({
        required: HEB_FIELD_IS_REQUIRED,
        validate: (val) => (val === ref.current) || HEB_PASS_DOESNT_MATCH
    }),
    phoneNumber: {
        validate: val => (isEmpty(val) || isMobilePhone(val, "he-IL")) || HEB_PHONE_ISNT_VALID
    },
    name: {
        validate: val => (isEmpty(val) || hebrewNameValidator(val)) || HEB_NAME_INVALID
    }
}

export { validationConfig };

