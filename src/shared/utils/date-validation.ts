import { isBefore, isSameDay, isSameHour } from "date-fns";

function dateBefore(date: Date) {
  const before = isBefore(date, new Date());
  const isToday = isSameDay(date, new Date());
  if (isToday || !before) {
    return true;
  }
  return false;
}

function validDateHorse(date: Date, horse: string, minutes: string) {
  const d = date.setHours(Number(horse), 0, 0, 0);
  const today = new Date().setMinutes(0, 0, 0);
  const upperOrSame = d >= today;
  if (upperOrSame) {
    return true;
  }
  return false;
}
function validDateMinutes(date: Date, horse: string, minutes: string) {
  const d = date.setHours(Number(horse), Number(minutes), 0, 0);
  const today = new Date().setSeconds(0, 0);
  const upperOrSame = d >= today;
  if (upperOrSame) {
    return true;
  }
  return false;
}

function hoursAfter(before: string, current: string, date: Date) {
  if (!before) {
    return true;
  }
  const hourBefore = date.setHours(Number(before));
  const hourCurrent = date.setHours(Number(current));
  const same = isSameHour(hourBefore, hourCurrent);
  const valid = isBefore(hourBefore, hourCurrent);
  console.log(valid, same);
  if (same || valid) {
    return true;
  }
  return false;
}

function minutesAfter(
  before: string,
  beforeHorse: string,
  current: string,
  date: Date,
  currentHours: string,
) {
  if (!before) {
    return true;
  }
  const dateBefore = date.setHours(Number(beforeHorse), Number(before));
  const dateCurrent = date.setHours(Number(currentHours), Number(current));
  return isBefore(dateBefore, dateCurrent);
}

const validationDate = {
  dateBefore,
  hoursAfter,
  minutesAfter,
  validDateHorse,
  validDateMinutes,
};

export default validationDate;
