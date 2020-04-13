import { login } from '../../../fetch/listers';
import sanitizer from '../sanitizeInput';
import toaster from '../../../utilities/toaster';
import { paths } from '../../pages/paths';



const { HEB_WRONG_CREDS, HEB_LOGGED_IN_SUCCESSFULLY } = {
    HEB_WRONG_CREDS: "אחד הפרטים שגוי.",
    HEB_LOGGED_IN_SUCCESSFULLY: "התחברת בהצלחה! מייד תועבר לאזור האישי."
}


export default (data, history) => {
    console.log("here");
    login(sanitizer(data))
        .then(({ token }) => {
            localStorage.setItem("token", token)
            toaster(HEB_LOGGED_IN_SUCCESSFULLY, "success")
            history.push(paths.myListings)
        })
        .catch(ex => {
            console.log(ex)
            if (ex.status == 403 || ex.status == 404)
                toaster(HEB_WRONG_CREDS, "warn");
        })
}