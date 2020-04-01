import isEmail from 'validator/es/lib/isEmail';
import isEmpty from 'validator/es/lib/isEmpty';
import isMobilePhone from 'validator/es/lib/isMobilePhone';
import combineMessages from '../../validation/combineMessages';
import { valPass, nameValidator } from '../../validation/signup';
import { errHebrew } from './heb';
import { isValidDate, isFutureDate } from '../../utilities/datetime';


const { HEB_INVALID_EMAIL, HEB_INVALID_DATE, HEB_INVALID_PRICE, HEB_INVALID_CITY, HEB_INVALID_STREET, HEB_FIELD_IS_REQUIRED, HEB_PASS_DOESNT_MATCH, HEB_PHONE_ISNT_VALID, HEB_NAME_INVALID, passwordErrMessages } = errHebrew;

const hebrewNameValidator = (val) => nameValidator.test(val)



const required = { required: HEB_FIELD_IS_REQUIRED };
const minPrice = 100000;
const validationConfig = {
    email: (justRequired = false) => ({
        ...required,
        ...justRequired || { validate: value => isEmail(value) || HEB_INVALID_EMAIL }
    }),
    password: (justRequired = false) => ({
        ...required,
        ...justRequired || { validate: (val) => combineMessages(valPass(val), passwordErrMessages, "על הסיסמה: ") }
    }),
    reEnter: (ref) => ({
        ...required,
        validate: (val) => (val === ref.current) || HEB_PASS_DOESNT_MATCH
    }),
    phoneNumber: {
        validate: val => (isEmpty(val) || isMobilePhone(val, "he-IL")) || HEB_PHONE_ISNT_VALID
    },
    name: {
        validate: val => (isEmpty(val) || hebrewNameValidator(val)) || HEB_NAME_INVALID
    },
    propertyType: {
        ...required
    },
    required,
    municipality: (municipalities) => ({
        ...required,
        validate: (val) => municipalities.includes(val) || HEB_INVALID_CITY
    }),
    streets: (streets) => ({
        ...required,
        validate: (val) => streets.includes(val) || HEB_INVALID_STREET
    }),
    price: {
        validate: (val) => isEmpty(val) || (Number(val) > minPrice) || HEB_INVALID_PRICE(minPrice)
    },
    date: {
        validate: (val="") => {    
            return isEmpty(val) || ((isValidDate(val) && isFutureDate(val)) || HEB_INVALID_DATE)
        }
    }

}


const mockNeighborhoods = ["אפקה", "גלילות, צוקי אביב ואזור שדה דב", "כוכב הצפון", "כלל רובע 1", "נוה אביבים", "נופי ים", "רמת אביב ג", "רמת-אביב", "תכנית ל", "גני צהלה ורמות צהלה", "הדר-יוסף", "המשתלה", "כלל רובע 2", "נאות אפקה א", "נאות אפקה ב", "נוה דן", "נוה שרת", "צהלה", "רביבים", "רמת החייל", "תל ברוך, תל ברוך צפון ומעוז אביב", "הצפון הישן - החלק הדרומי", "הצפון הישן - החלק הצפוני", "בבלי", "הצפון החדש - סביבת ככר המדינה", "הצפון החדש-החלק הדרומי", "כרם התימנים", "לב תל-אביב", "נוה צדק", "שם הקובץ", "גבעת הרצל, אזור המלאכה יפו", "יפו ג ונוה גולן", "יפו ד (גבעת התמרים)", "יפו העתיקה, נמל יפו", "כלל הרובע 7", "מכללת יפו-תא ודקר", "עגמי וגבעת עליה", "צהלון ושיכוני חסכון", "צפון יפו", "תל-כביר, נוה עופר,יפו ב", "נוה שאנן", "פלורנטין", "קרית שלום ופארק החורשות", "שפירא", "אורות", "ביצרון ורמת ישראל", "התקווה", "יד אליהו", "כפיר", "לבנה וידידיה", "נוה אליעזר וכפר שלם מזרח", "נוה ברבור , כפר שלם מערב", "נוה חן", "נחלת יצחק", "ניר אביב", "עזרא והארגזים", "רמת הטייסים", "תל-חיים"];


const booleanAttributes = {
    general: ["AC", "grates", "elevator", "handicappedAccesible", "mamad", "storage", "furniture"],
    rent: ["taxesIncluded", "longTerm", "forPartners", "petsAllowed"],
    commercial: ["divided", "meetingRoom", "bathrooms"],
    roommates: ["taxesIncluded", "keepsKashrut", "petsAllowed"],
    forsale: []
}

const attributes = {
    general: [
        ["sqMeters", "price"],
        ["desc", "entryDate"],
        ["furnitureDesc"]
    ],
    forsale: [
        [],
        ["sqMGarden", "sqMBuilt"],
        []
    ],
    rent: [
        [],
        ["homeOwnerAssociationMonthly", "numChecks", "biMonthlyArnona"],
    ],
    commercial: [
        [],
        ["rentedUntil"],
    ],
    roommates: [
        [],
        ["numChecks"],
    ]
}


const commonDenom = ["דירה", "דירת גן", "פרטי/קוטג'", "גג/פנטהאוז", "דופלקס", "דו משפחתי", "מרתף/פרטר", "טריפלקס", "יחידת דיור", "משק חקלאי/נחלה", "משק עזר", "דיור מוגן", "בניין מגורים", "סטודיו/לופט", "מחסן", "קב' רכישה/ זכות לנכס", "חניה"];
let forsale = ["מגרשים", "דירת נופש", "כללי", ...commonDenom];
let rent = [...forsale, "החלפת דירות", "סאבלט"];
let roommates = rent;
let AddressValidation = {
    propertyType: {
        forsale,
        rent,
        roommates,
        commercial: ["אולמות", "בניין משרדים", "חנויות/שטח מסחרי", "חלל עבודה משותף", "חניון", "כללי", "מבני תעשיה", "מגרשים", "מחסנים", "מרתף", "משרדים", "סטודיו", "עסקים למכירה", "קליניקות"]
    },
    upkeep: ["חדש מקבלן (לא גרו בנכס)", "חדש (גרו בנכס)", "משופץ", "במצב שמור", "דרוש שיפוץ"],
    propertyTypesWithRooms: ["דירה", "דירת גן", "פרטי/קוטג'", "גג/פנטהאוז", "דופלקס", "דירת נופש", "דו משפחתי", "מרתף/פרטר", "יחידת דיור", "דיור מוגן", "סטודיו/לופט"]
}



export { validationConfig, mockNeighborhoods, booleanAttributes, AddressValidation };

