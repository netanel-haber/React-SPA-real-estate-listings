const moment = require('moment');
moment.locale('en-il');

module.exports = {
    isToday(d) {
        return Boolean(moment().diff(moment(d), 'days'));
    },
    format(d) {
        return moment(d).format('L');
    }
}

