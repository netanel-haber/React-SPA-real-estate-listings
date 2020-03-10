import 'dayjs/locale/en-il';
import dayjs from 'dayjs';
dayjs.locale('en-il')

const isToday = (d) => {
    return !Boolean(dayjs().diff(dayjs(d), 'day'));
}
const format = (d) => {
    return dayjs(d).format(`DD/MM/YYYY`);
}

export { isToday, format };




