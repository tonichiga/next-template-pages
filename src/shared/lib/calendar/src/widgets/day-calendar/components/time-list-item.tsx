import { ICalendarData } from "@/lib/calendar/types";
import { format, isSameHour, isSameMinute } from "date-fns";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import useEvents from "../../../hooks/useEvents";
import { findBefore } from "../../../utils/findBefore";
import MemberActionName from "../../member-action-name/member-action-name";

interface IProps {
  time: Date;
  events: ICalendarData[];
  onClick?: (events: ICalendarData) => void;
  onEditEvent?: (event: ICalendarData) => void;
}

const TimeListItem: FC<IProps> = ({ events, time, onClick, onEditEvent }) => {
  const [isCurrentTime, setIsCurrentTime] = useState(false);
  const interval = useRef<any>(null);
  const currentEvents = useMemo(() => {
    return events.filter(
      (e) => isSameHour(e.start, time) && isSameMinute(e.start, time),
    );
  }, [events, time]);

  const { handleClickEvent, handleEditEvent } = useEvents(onClick, onEditEvent);

  const isSameTime = (date: Date) => {
    clearInterval(interval.current);
    const now = new Date();
    const isInterval =
      now.getMinutes() - date.getMinutes() < 5 &&
      now.getMinutes() - date.getMinutes() >= 0;
    setIsCurrentTime(isSameHour(date, now) && isInterval);
    const timeInterval = isInterval ? 60000 : 60000 - now.getSeconds() * 1000;
    interval.current = setInterval(() => {
      isSameTime(date);
    }, timeInterval);
  };

  useEffect(() => {
    isSameTime(time);
    return () => clearInterval(interval.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval, time]);

  return (
    <li
      className={`time-list-item ${
        currentEvents.length ? "time-list-item_active" : ""
      } ${isCurrentTime ? "time-list-item_current-day" : ""} ${
        findBefore(time) ? "item-event_before" : ""
      }`}
    >
      <p className={"time-list-item__time"}>{format(time, "HH:mm")}</p>
      <div className={"item-events"}>
        {currentEvents.map((event, index) => {
          return (
            <div
              className={`item-event`}
              onClick={(e) => handleClickEvent(e, event)}
              key={index}
            >
              <div className={"left-event_item"} />
              <div className={"right-event_item"}>
                <MemberActionName
                  name={event.member?.value}
                  handleEditEvent={() => handleEditEvent(event)}
                  isBefore={event.isBefore}
                />
                <p className={"event-description"}>{event.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </li>
  );
};

export default TimeListItem;
