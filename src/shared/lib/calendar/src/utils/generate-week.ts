import { addDays, subDays } from "date-fns";

type WeekObject = { [weekNumber: number]: Date[] };

function getWeeksInMonth(date: Date): WeekObject {
  const currentMonth = date.getMonth();
  const weeks = {};

  // Create a copy of the input date to avoid modifying it
  const currentDate = new Date(date);
  currentDate.setDate(1); // Start from the 1st day of the month

  while (currentDate.getMonth() === currentMonth) {
    const weekNumber = getISOWeek(currentDate);
    if (!weeks[weekNumber]) {
      weeks[weekNumber] = [];
    }
    weeks[weekNumber].push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  for (let week in weeks) {
    const currentWeek = weeks[week];
    if (currentWeek.length < 7) {
      if (Object.keys(weeks).indexOf(week) === 0) {
        weeks[week] = [
          ...Array(7 - currentWeek.length)
            .fill(null)
            .map((_, i) => subDays(currentWeek.at(0), i + 1))
            .reverse(),
          ...currentWeek,
        ];
      } else {
        weeks[week] = [
          ...currentWeek,
          ...Array(7 - currentWeek.length)
            .fill(null)
            .map((_, i) => addDays(currentWeek.at(-1), i + 1)),
        ];
      }
    }
  }

  return weeks;
}

function getISOWeek(date: Date): number {
  const dt = new Date(date);
  dt.setHours(0, 0, 0, 0);
  dt.setDate(dt.getDate() + 4 - (dt.getDay() || 7));
  const startOfYear = new Date(dt.getFullYear(), 0, 1);
  const diff = +dt - +startOfYear;
  return Math.ceil(diff / 604800000);
}

export default getWeeksInMonth;
