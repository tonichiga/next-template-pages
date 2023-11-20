import CalendarContainer from "@/lib/calendar/src/components/calendar-container";
import TableContainer from "@/lib/calendar/src/components/table-container";
import getWeeksInMonth from "@/lib/calendar/src/utils/generate-week";
import ActionHeader from "@/lib/calendar/src/widgets/action-header/action-header";
import DayListItem from "@/lib/calendar/src/widgets/day-list-item/day-list-item";
import { ICalendarOptions } from "@/lib/calendar/types";
import { addMonths, isSameDay, subMonths } from "date-fns";
import { FC, Fragment, useEffect, useMemo, useState } from "react";
import getWeekList from "../../utils/week-list";

const MonthCalendar: FC<ICalendarOptions> = ({
  currentDay,
  height,
  className,
  data,
  onEventClick,
  onEditEvent,
  lang,
  translation,
}) => {
  const [activeDay, setActiveDay] = useState<Date>();

  const monthIntervals = useMemo(() => {
    if (!activeDay) {
      return [];
    }
    return getWeeksInMonth(activeDay);
  }, [activeDay]);

  const handlePrevDay = () => {
    setActiveDay(subMonths(activeDay, 1));
  };

  const handleNextDay = () => {
    setActiveDay(addMonths(activeDay, 1));
  };

  const handleCurrentDay = () => {
    setActiveDay(new Date());
  };

  useEffect(() => {
    setActiveDay(currentDay ? currentDay : new Date());
    //eslint-disable-next-line
  }, []);

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
      {/* <Header activeDay={activeDay} lang={lang} /> */}
      <CalendarContainer height={height} className={"calendar-month"}>
        <TableContainer>
          {getWeekList(lang)?.map((m) => (
            <div className={"day-names"} key={m}>
              <p>{m}</p>
            </div>
          ))}
          {Object.entries(monthIntervals).map(([key, value], i, array) => (
            <Fragment key={key}>
              {/* <div
                className={`week-number ${
                  array.length - 1 === i ? "disable-border-bottom" : ""
                }`}
              >
                <p>{key}</p>
              </div> */}
              {value.map((t, index) => (
                <DayListItem
                  time={t}
                  events={data}
                  key={index}
                  isLast={array.length - 1 === i}
                  onClick={onEventClick}
                  onEditEvent={onEditEvent}
                />
              ))}
            </Fragment>
          ))}
        </TableContainer>
      </CalendarContainer>
    </>
  );
};

export default MonthCalendar;
