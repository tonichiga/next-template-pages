import generateWeekdays from "@/lib/calendar/src/utils/generate-weeks";
import ActionHeader from "@/lib/calendar/src/widgets/action-header/action-header";
import DayTable from "@/lib/calendar/src/widgets/week-calendar/components/day-table";
import TimeItem from "@/lib/calendar/src/widgets/week-calendar/components/time-item";
import { ICalendarOptions } from "@/lib/calendar/types";
import {
  addWeeks,
  eachHourOfInterval,
  endOfDay,
  format,
  isSameDay,
  startOfDay,
} from "date-fns";
import { FC, useEffect, useMemo, useState } from "react";
import getLocale from "../../utils/locale-format";

const WeekCalendar: FC<ICalendarOptions> = ({
  data,
  currentDay,
  lang,
  translation,
  onEventClick,
  onEditEvent,
}) => {
  const [activeDay, setActiveDay] = useState<Date>();

  const generatedWeekdays = useMemo(() => {
    if (!activeDay) {
      return [];
    }
    return generateWeekdays(activeDay);
  }, [activeDay]);

  const handlePrevDay = () => {
    setActiveDay(addWeeks(activeDay, -1));
  };

  const handleNextDay = () => {
    setActiveDay(addWeeks(activeDay, 1));
  };

  const handleCurrentDay = () => {
    setActiveDay(new Date());
  };

  useEffect(() => {
    setActiveDay(currentDay ? currentDay : new Date());
    //eslint-disable-next-line
  }, []);

  const generateHours = useMemo(() => {
    const hours = [];
    const defaultHour = generatedWeekdays.map((e) =>
      eachHourOfInterval({
        start: startOfDay(e),
        end: endOfDay(e),
      }).filter((e, i, arr) => e.getHours() !== arr[i + 1]?.getHours()),
    );
    for (let i = 0; i < defaultHour.length; i++) {
      for (let j = 0; j < defaultHour[i].length; j++) {
        if (hours[j] === undefined) {
          hours[j] = [];
        }
        hours[j] = [...hours[j], defaultHour[i][j]];
      }
    }
    return hours.flat();
  }, [generatedWeekdays]);

  return (
    <>
      <ActionHeader
        onPrevClick={handlePrevDay}
        onNextClick={handleNextDay}
        onCurrentClick={handleCurrentDay}
        disabled={isSameDay(activeDay, new Date())}
        lang={lang}
        translation={translation}
      />
      <DayTable>
        <>
          {generateWeekdays(activeDay).map((d) => (
            <li className={"week-names"} key={d.getTime()}>
              <p>{format(d, "EEEE, MMM d", { locale: getLocale(lang) })}</p>
            </li>
          ))}
          {generateHours.map((d, index) => (
            <TimeItem
              onEditEvent={onEditEvent}
              time={d}
              events={data}
              key={d.getTime()}
              isLast={index >= 161}
              onClick={onEventClick}
            />
          ))}
        </>
      </DayTable>
    </>
  );
};

export default WeekCalendar;
