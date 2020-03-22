import { timeIsLessThanOneMinuteAway } from './datetime';
import parseJwt from './parseJwt';

export default (token) => timeIsLessThanOneMinuteAway(parseJwt(token).exp);
