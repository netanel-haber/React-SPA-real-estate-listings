import { timeIsLessThanXMinutesAway } from './datetime';
import parseJwt from './parseJwt';


export default (token) => timeIsLessThanXMinutesAway(parseJwt(token).exp, 5);
