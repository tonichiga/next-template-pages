import { addDays, eachDayOfInterval, startOfWeek } from "date-fns";

function generateWeekdays(currentDate: Date): Date[] {
  if (!currentDate) {
    return [];
  }
  const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  return eachDayOfInterval({
    start: startOfCurrentWeek,
    end: addDays(startOfCurrentWeek, 6),
  });
}

export default generateWeekdays;
