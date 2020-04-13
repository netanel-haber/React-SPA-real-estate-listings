import 'dayjs/locale/en-il';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
dayjs.locale('en-il')
dayjs.extend(isSameOrAfter)


const dayPickerProps = {
    locale: "he-IL",
    months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
    weekdaysLong: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
    weekdaysShort: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
    firstDayOfWeek: 0
}


const israeliDateFormat = `DD/MM/YYYY`;
const format = (d) => {
    return dayjs(d).format(israeliDateFormat);
}

const isToday = (d) => {
    return format(d) === format(dayjs());
}

const isValidDate = (d) => {
    return !Number.isNaN(Date.parse(d))
}


const isFutureDate = (d) => {
    return dayjs(d).isAfter(dayjs())
}



const timeIsLessThanXMinutesAway = (epochSeconds, minutes = 1) => {
    const timeInSeconds = Date.now() / 1000;
    return (epochSeconds > timeInSeconds) && ((epochSeconds - timeInSeconds) <= 60 * minutes);
}


export { isToday, format, timeIsLessThanXMinutesAway, isValidDate, dayPickerProps, israeliDateFormat, isFutureDate };




