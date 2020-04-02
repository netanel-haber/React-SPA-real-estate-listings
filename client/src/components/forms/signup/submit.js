import { signup } from '../../../fetch/listers';
import sanitizer from '../sanitizeInput';
import toaster from '../../../utilities/toaster';
import { paths } from '../../pages/paths';

const { HEB_WRONG_CREDS, HEB_SUCCESS } = {
    HEB_WRONG_CREDS: "השדות לא מולאו כהלכה.",
    HEB_SUCCESS:"נרשמת בהצלחה!"
}


export default (data, history) => {
    console.log(history);
    delete data.reEnterPassword;
    signup(sanitizer(data))
        .then(res => {
            const { token } = res;
            localStorage.setItem("token", token)
            toaster(HEB_SUCCESS,"success");
            history.push(paths.myListings);
        })
        .catch(ex => {
            console.log(ex)
            if (ex.status == 403 || ex.status == 404)
                toaster(HEB_WRONG_CREDS, "warn");
        })
}