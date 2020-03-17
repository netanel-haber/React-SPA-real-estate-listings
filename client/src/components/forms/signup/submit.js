import { signup } from '../../../fetch/listers';
import sanitizer from '../sanitizeInput';


export default (data) => {
    delete data.reEnterPassword;
    signup(sanitizer(data))
        .then(({ token }) => { localStorage.setItem("token", token) })
        .catch(ex => { console.log(ex) })
}