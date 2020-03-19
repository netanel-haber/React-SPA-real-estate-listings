import { timeIsLessThanOneMinuteAway } from './datetime';

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join(''));
    return JSON.parse(jsonPayload).exp;
};


export default (token) => timeIsLessThanOneMinuteAway(parseJwt(token));
