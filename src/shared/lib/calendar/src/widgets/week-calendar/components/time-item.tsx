import { ICalendarData } from "@/lib/calendar/types";
import { addMinutes, format, isBefore, isSameDay, isSameHour } from "date-fns";
import { FC, useMemo } from "react";
import useEvents from "../../../hooks/useEvents";
import { useIntervalUpdate } from "../../../hooks/useIntervalUpdate";
import MemberActionName from "../../member-action-name/member-action-name";

function findBefore(date: Date): boolean {
  const dateInclude = addMinutes(date, 5);
  return isBefore(dateInclude, new Date());
}

interface IProps {
  time: Date;
  events: ICalendarData[];
  onClick?: (events: ICalendarData) => void;
  onEditEvent: (event: ICalendarData) => void;
  isLast: boolean;
}

const TimeListItem: FC<IProps> = ({
  events,
  time,
  onClick,
  onEditEvent,
  isLast,
}) => {
  const currentEvents = useMemo((): ICalendarData[] => {
    return events.filter(
      (d) => isSameDay(time, d.start) && isSameHour(d.start, time),
    );
  }, [time, events]);

  const isSame = useMemo(
    () => isSameDay(time, new Date()) && isSameHour(time, new Date()),
    [time],
  );

  const { handleClickEvent, handleEditEvent } = useEvents(onClick, onEditEvent);

  useIntervalUpdate();

  return (
    <li
      className={`week-list-item ${isLast ? "disable-border-bottom" : ""} ${
        isSame && "time-list-item_current-day"
      }`}
    >
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
                {format(event.start, "HH:mm")}
              </p>
              {event.endAt ? (
                <p className={"event-end_time"}>
                  {format(event.endAt, "HH:mm")}
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

export default TimeListItem;
