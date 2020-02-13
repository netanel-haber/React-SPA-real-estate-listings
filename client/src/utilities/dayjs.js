const dayjs = require('dayjs');

module.exports = {
    isToday(d) {
        return Boolean(dayjs().diff(dayjs(d), 'day'));
    }
}