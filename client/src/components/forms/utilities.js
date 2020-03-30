import isEmail from 'validator/es/lib/isEmail';
import isEmpty from 'validator/es/lib/isEmpty';
import isMobilePhone from 'validator/es/lib/isMobilePhone';
import combineMessages from '../../validation/combineMessages';
import { valPass, nameValidator } from '../../validation/signup';
import { errHebrew } from './heb';



const { HEB_INVALID_EMAIL, HEB_INVALID_CITY, HEB_INVALID_STREET, HEB_FIELD_IS_REQUIRED, HEB_PASS_DOESNT_MATCH, HEB_PHONE_ISNT_VALID, HEB_NAME_INVALID, passwordErrMessages } = errHebrew;

const hebrewNameValidator = (val) => nameValidator.test(val)

const validationConfig = {
    email: (justRequired = false) => ({
        required: HEB_FIELD_IS_REQUIRED,
        ...justRequired || { validate: value => isEmail(value) || HEB_INVALID_EMAIL }
    }),
    password: (justRequired = false) => ({
        required: HEB_FIELD_IS_REQUIRED,
        ...justRequired || { validate: (val) => combineMessages(valPass(val), passwordErrMessages, "על הסיסמה: ") }
    }),
    reEnter: (ref) => ({
        required: HEB_FIELD_IS_REQUIRED,
        validate: (val) => (val === ref.current) || HEB_PASS_DOESNT_MATCH
    }),
    phoneNumber: {
        validate: val => (isEmpty(val) || isMobilePhone(val, "he-IL")) || HEB_PHONE_ISNT_VALID
    },
    name: {
        validate: val => (isEmpty(val) || hebrewNameValidator(val)) || HEB_NAME_INVALID
    },
    propertyType: {
        required: HEB_FIELD_IS_REQUIRED
    },
    required: {
        required: HEB_FIELD_IS_REQUIRED
    },
    municipality: (municipalities) => ({
        required: HEB_FIELD_IS_REQUIRED,
        validate: (val) => municipalities.includes(val) || HEB_INVALID_CITY
    }),
    streets: (streets) => ({
        required: HEB_FIELD_IS_REQUIRED,
        validate: (val) => streets.includes(val) || HEB_INVALID_STREET
    })
}


const mockNeighborhoods = ["אפקה", "גלילות, צוקי אביב ואזור שדה דב", "כוכב הצפון", "כלל רובע 1", "נוה אביבים", "נופי ים", "רמת אביב ג", "רמת-אביב", "תכנית ל", "גני צהלה ורמות צהלה", "הדר-יוסף", "המשתלה", "כלל רובע 2", "נאות אפקה א", "נאות אפקה ב", "נוה דן", "נוה שרת", "צהלה", "רביבים", "רמת החייל", "תל ברוך, תל ברוך צפון ומעוז אביב", "הצפון הישן - החלק הדרומי", "הצפון הישן - החלק הצפוני", "בבלי", "הצפון החדש - סביבת ככר המדינה", "הצפון החדש-החלק הדרומי", "כרם התימנים", "לב תל-אביב", "נוה צדק", "שם הקובץ", "גבעת הרצל, אזור המלאכה יפו", "יפו ג ונוה גולן", "יפו ד (גבעת התמרים)", "יפו העתיקה, נמל יפו", "כלל הרובע 7", "מכללת יפו-תא ודקר", "עגמי וגבעת עליה", "צהלון ושיכוני חסכון", "צפון יפו", "תל-כביר, נוה עופר,יפו ב", "נוה שאנן", "פלורנטין", "קרית שלום ופארק החורשות", "שפירא", "אורות", "ביצרון ורמת ישראל", "התקווה", "יד אליהו", "כפיר", "לבנה וידידיה", "נוה אליעזר וכפר שלם מזרח", "נוה ברבור , כפר שלם מערב", "נוה חן", "נחלת יצחק", "ניר אביב", "עזרא והארגזים", "רמת הטייסים", "תל-חיים"];


export { validationConfig, mockNeighborhoods };

