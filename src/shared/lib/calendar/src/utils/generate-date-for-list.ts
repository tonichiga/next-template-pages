import { ICalendarData } from "@/lib/calendar/types";
import { isSameDay } from "date-fns";

function generateDateForList(date: ICalendarData[]) {
  let sortedDate = date.sort((a, b) => {
    return a.start.getTime() - b.start.getTime();
  });
  sortedDate = sortedDate.filter(
    (event) => event.start.getMonth() >= new Date().getMonth(),
  );
  const dateGenerated: any = [];
  let arrayDate: ICalendarData[] = [];
  for (let i = 0; i < sortedDate.length; i++) {
    const prev = sortedDate[i - 1] ?? null;
    const current = sortedDate[i];
    const next = sortedDate[i + 1];
    if (i === 0) {
      dateGenerated.push(current.start);
      arrayDate.push(current);
      dateGenerated.push(arrayDate);
      continue;
    }
    if (i === sortedDate.length - 1) {
      if (arrayDate.length > 0 && isSameDay(prev.start, current.start)) {
        arrayDate.push(current);
        dateGenerated.push(arrayDate);
        continue;
      }
      dateGenerated.push(arrayDate);
      arrayDate = [];
      dateGenerated.push(current.start);
      arrayDate.push(current);
      dateGenerated.push(arrayDate);
      continue;
    }
    if (isSameDay(prev.start, current.start)) {
      arrayDate.push(current);
      continue;
    }
    if (arrayDate.length && dateGenerated.at(-1) instanceof Date) {
      dateGenerated.push(arrayDate);
    }
    arrayDate = [];
    dateGenerated.push(current.start);
    arrayDate.push(current);
  }
  return dateGenerated;
}

export default generateDateForList;
