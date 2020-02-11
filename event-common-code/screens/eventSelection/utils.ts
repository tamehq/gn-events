import moment from 'moment';

export function formatDate(start, finish, timeZone) {
  const eventEndTime = '02:00';
  const startTime = moment(start).utc().add(timeZone, 'minutes').format('HH:mm');
  const endtTime = moment(finish).utc().add(timeZone, 'minutes').format('HH:mm');
  const finishTime = eventEndTime || '00:00';
  if (moment(start).isSame(finish, 'day')) {
    return `${moment(start).format('dddd, MMM Do, YYYY')}, ${startTime}-${endtTime === '23:59' ? finishTime : endtTime}`;
  }
  return `${moment(start).format('dddd, MMM Do')} - ${moment(finish).format('dddd, MMM Do, YYYY')}, starts at ${startTime}`;
}