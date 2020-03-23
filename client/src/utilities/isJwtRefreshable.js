import { timeIsLessThanOneMinuteAway } from './datetime';
import parseJwt from './parseJwt';
import toaster from './toaster';


export default (token) => {
    toaster("attempting to check if jwt is elligible for refresh", "info")
    return timeIsLessThanOneMinuteAway(parseJwt(token).exp)
};
