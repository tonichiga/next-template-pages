import { ICalendarData } from "@/lib/calendar/types";
import { format, isSameDay } from "date-fns";
import { FC, useMemo } from "react";
import useEvents from "../../hooks/useEvents";
import { useIntervalUpdate } from "../../hooks/useIntervalUpdate";
import MemberActionName from "../member-action-name/member-action-name";

interface IProps {
  time: Date;
  events: ICalendarData[];
  onClick?: (events: ICalendarData) => void;
  isLast: boolean;
  onEditEvent: (event: ICalendarData) => void;
}

const DayListItem: FC<IProps> = ({
  events,
  time,
  onClick,
  onEditEvent,
  isLast,
}) => {
  const currentEvents = useMemo(() => {
    return events.filter((e) => isSameDay(e.start, time));
  }, [events, time]);

  const isSame = useMemo(() => isSameDay(time, new Date()), [time]);

  const { handleClickEvent, handleEditEvent } = useEvents(onClick, onEditEvent);

  useIntervalUpdate();

  return (
    <li
      className={`day-list-item ${
        currentEvents.length ? "day-list-item_active" : ""
      } ${isLast ? "disable-border-bottom" : ""} ${
        isSame ? "time-list-item_current-day" : ""
      }`}
    >
      <p className={"day-list-item__time"}>{time ? format(time, "d") : ""}</p>
      <div className={"item-events"}>
        {currentEvents.map((event, index) => (
          <div
            className={`day-item-event ${
              event.isBefore && "item-event_before"
            }`}
            onClick={(e) => handleClickEvent(e, event)}
            key={index}
          >
            <div className={"left-event_item"} />
            <div className={"time-info_day"}>
              <p className={"event-start_time"}>
                {format(event.endAt, "HH:mm")}
              </p>
              {event.endAt ? (
                <p className={"event-end_time"}>
                  {format(event.start, "HH:mm")}
                </p>
              ) : null}
            </div>
            <div className={"right-event_item"}>
              <MemberActionName
                name={event.member?.value}
                handleEditEvent={() => handleEditEvent(event)}
                isBefore={event.isBefore}
              />
              <p className={"event-description"}>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </li>
  );
};

export default DayListItem;
