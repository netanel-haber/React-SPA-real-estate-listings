import { timeIsLessThanXMinutesAway } from './datetime';
import parseJwt from './parseJwt';
import toaster from './toaster';


export default (token) => {
    toaster(`attempting to check if jwt is elligible for refresh. minutes to expiry: ${((parseJwt(token).exp) - (Date.now() / 1000)) / 60}`, "info", 1)
    return timeIsLessThanXMinutesAway(parseJwt(token).exp, 5)
};
