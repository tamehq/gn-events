import moment from "moment";

export const getDisplayDate = (date: string) => {
  const days = moment().diff(moment(date), 'days')
  const hours = moment().diff(moment(date), 'hours')
  const minutes = moment().diff(moment(date), 'minutes')
  const seconds = moment().diff(moment(date), 'seconds')
  if (seconds && seconds < 60) {
    return `${seconds} s`
  }
  if (minutes && minutes < 60) {
    return `${minutes} m`
  }
  if (hours && hours < 24) {
    return `${hours} h`
  }
  if (days && days < 8) {
    return `${days} d`
  }
  return moment(date).format('DD MMM')
}

export const getDisplayDay = (date: string) => {
  const sectionDay = moment(date)
  let sectionString = moment().isSame(sectionDay, 'day')
      ? 'Today'
      : moment().add(1, 'day').isSame(sectionDay, 'day')
          ? 'Tomorrow'
          : sectionDay.format('DD MMM')
  return sectionString
}
