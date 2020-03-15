import { signup } from '../../../fetch/listers';

export default (data) => {
    delete data.reEnterPassword;
    const sanitized = Object.fromEntries(Object.entries(data).filter(([key, value]) => value !== "").map(([key, value]) => ([key, value.trim()])));
    signup(sanitized)
        .then((res) => { console.log(res) })
        .catch()
}