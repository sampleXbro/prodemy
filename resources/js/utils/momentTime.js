import moment from 'moment-timezone';

export function momentTime(created_at){
    const locale = window.navigator.userLanguage || window.navigator.language;

    moment.locale(locale);

    const timeZone = moment.tz.guess();
    const timeLoc = moment(created_at).tz(timeZone);
    const currentTime = moment.tz(timeZone);

    if(currentTime.diff(timeLoc, 'hour') < 2){
        return timeLoc.subtract(10, 'seconds').fromNow();
    } else if(currentTime.diff(timeLoc, 'hour') < 24) {
        return timeLoc.calendar();
    } else {
        return timeLoc.format('Do MMM YYг. в HH:mm')
    }
}
