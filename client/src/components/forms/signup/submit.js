import { signup } from '../../../fetch/signup';

export default (data) => {
    const sanitized = Object.fromEntries(Object.entries(data).map(([key, value]) => ([key, value.trim()])));
    signup(sanitized)
        .then(() => { console.log("yippe!") })
        .catch()
}