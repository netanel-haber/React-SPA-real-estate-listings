import { login } from '../../../fetch/listers';
import sanitizer from '../sanitizeInput';
import toaster from '../../../utilities/toaster';

const { HEB_WRONG_CREDS } = {
    HEB_WRONG_CREDS: "אחד הפרטים שגוי."
}


export default (data) => {
    login(sanitizer(data))
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