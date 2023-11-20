import { addMinutes, isBefore } from "date-fns";

export function findBefore(date: Date): boolean {
  const dateInclude = addMinutes(date, 5);
  return isBefore(dateInclude, new Date());
}
