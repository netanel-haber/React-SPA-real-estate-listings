import 'dayjs/locale/en-il';
import dayjs from 'dayjs';
dayjs.locale('en-il')

const format = (d) => {
    return dayjs(d).format(`DD/MM/YYYY`);
}

const isToday = (d) => {
    return format(d) === format(dayjs());
}

export { isToday, format };




