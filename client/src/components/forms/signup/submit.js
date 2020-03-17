import { signup } from '../../../fetch/listers';
import sanitizer from '../sanitizeInput';
import toaster from '../../../utilities/toaster';

const { HEB_WRONG_CREDS } = {
    HEB_WRONG_CREDS: "השדות לא מולאו כהלכה."
}


export default (data) => {
    delete data.reEnterPassword;
    signup(sanitizer(data))
        .then(res => {
            const { token } = res;
            localStorage.setItem("token", token)
        })
        .catch(ex => {
            console.log(ex)
            if (ex.status == 403 || ex.status == 404)
                toaster(HEB_WRONG_CREDS, "warn");
        })
}