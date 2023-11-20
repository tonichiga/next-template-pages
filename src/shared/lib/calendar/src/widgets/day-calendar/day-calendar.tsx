import CalendarContainer from "@/lib/calendar/src/components/calendar-container";
import generateTimeIntervals from "@/lib/calendar/src/utils/generate-time";
import ActionHeader from "@/lib/calendar/src/widgets/action-header/action-header";
import Header from "@/lib/calendar/src/widgets/day-calendar/components/header";
import TimeList from "@/lib/calendar/src/widgets/day-calendar/components/time-list";
import TimeListItem from "@/lib/calendar/src/widgets/day-calendar/components/time-list-item";
import { ICalendarOptions } from "@/lib/calendar/types";
import { addDays, isSameDay, subDays } from "date-fns";
import { FC, useEffect, useMemo, useState } from "react";

const DayCalendar: FC<ICalendarOptions> = ({
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

  const timeIntervals = useMemo(() => {
    if (!activeDay) {
      return [];
    }
    return generateTimeIntervals(
      activeDay.getFullYear(),
      activeDay.getMonth(),
      activeDay.getDate(),
      5,
    );
  }, [activeDay]);

  const handlePrevDay = () => {
    setActiveDay(subDays(activeDay, 1));
  };

  const handleNextDay = () => {
    setActiveDay(addDays(activeDay, 1));
  };

  const handleCurrentDay = () => {
    setActiveDay(new Date());
  };

  useEffect(() => {
    setActiveDay(currentDay ? currentDay : new Date());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Header activeDay={activeDay} lang={lang} />
      <CalendarContainer height={height} className={className}>
        {timeIntervals.map((e) => (
          <TimeList key={e[0]} repeat={e.length}>
            {e.map((t) => (
              <TimeListItem
                onEditEvent={onEditEvent}
                key={t}
                time={t}
                events={data}
                onClick={onEventClick}
              />
            ))}
          </TimeList>
        ))}
      </CalendarContainer>
    </>
  );
};

export default DayCalendar;
