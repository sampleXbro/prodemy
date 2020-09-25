import moment from 'moment-timezone';

export function momentTime(created_at){
    const locale = window.navigator.userLanguage || window.navigator.language;

    moment.locale(locale);

    const timeZone = moment.tz.guess();
    const timeLoc = moment(created_at).tz(timeZone);
    const currentTime = moment.tz(timeZone);

    if(currentTime.diff(timeLoc, 'hour') < 2){
        return timeLoc.fromNow();
    } else if(currentTime.diff(timeLoc, 'day') < 2) {
        return timeLoc.calendar();
    } else {
        return timeLoc.format('Do MMM YYг. в HH:mm')
    }
}
