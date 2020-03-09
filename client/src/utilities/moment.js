import moment from 'moment';
import 'moment/locale/en-il';


const isToday = (d) => {
    return !Boolean(moment().diff(moment(d), 'days'));
}
const format = (d) => {
    return moment(d).format('L');
}

export { isToday, format };




