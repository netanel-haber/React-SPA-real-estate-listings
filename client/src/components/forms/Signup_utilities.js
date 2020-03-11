import isEmail from 'validator/es/lib/isEmail';
import isMobilePhone from 'validator/es/lib/isMobilePhone';


const { HEB_INVALID_EMAIL, HEB_FIELD_IS_REQUIRED, HEB_PASS_DOESNT_MATCH } = {
    HEB_INVALID_EMAIL: "כתובת המייל אינה תקינה!",
    HEB_FIELD_IS_REQUIRED: "שדה זה הינו שדה חובה",
    HEB_PASS_DOESNT_MATCH: "הסיסמאות שהזנת אינן תואמות."
}



const emailValidConfig = {
    required: HEB_FIELD_IS_REQUIRED,
    validate: value => isEmail(value) || HEB_INVALID_EMAIL
}



const matchingErrMessages = ["להכיל אות אחת קטנה לפחות. ",
    "להכיל אות אחת גדולה לפחות. ",
    "להכיל ספרה אחת לפחות. ",
    "להכיל אחד מהתווים הבאים לפחות: !@#$%^&*",
    "להיות לפחות באורך 8 תווים. "];
const passwordValidConfig = {
    required: HEB_FIELD_IS_REQUIRED,
    validate: (val) => {
        let combinedMessage = "על הסיסמה: ";
        let validators = [/[a-z]+/, /[A-Z]+/, /[0-9]+/, /[!@#$%^&*]+/, /.{8,}/];
        validators.forEach((exp, index) => {
            if (!exp.test(val)) {
                combinedMessage += matchingErrMessages[index]
            }
        });
        return combinedMessage === "על הסיסמה: " || combinedMessage;
    }
}


const reEnterValidConfig = (ref) => ({
    required: HEB_FIELD_IS_REQUIRED,
    validate: (val) => (val === ref.current) || HEB_PASS_DOESNT_MATCH
});



export { emailValidConfig, passwordValidConfig, reEnterValidConfig }
