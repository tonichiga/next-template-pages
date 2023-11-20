function generateTimeIntervals(
  year: number,
  month: number,
  day: number,
  intervalMinutes: number,
) {
  const timeIntervals = [];
  const baseDate = new Date(year, month, day);

  for (let hour = 0; hour < 24; hour++) {
    const hourIntervals = [];
    for (let minute = 0; minute < 60; minute += intervalMinutes) {
      const date = new Date(baseDate);
      date.setHours(hour, minute, 0, 0);
      hourIntervals.push(date);
    }
    timeIntervals.push(hourIntervals);
  }
  return timeIntervals;
}
export default generateTimeIntervals;
