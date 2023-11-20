import generateDateForList from "@/lib/calendar/src/utils/generate-date-for-list";
import ListItem from "@/lib/calendar/src/widgets/list-calendar/component/list-item";
import { ICalendarData, ICalendarOptions } from "@/lib/calendar/types";
import { format } from "date-fns";
import { FC, useLayoutEffect, useMemo } from "react";
import getLocale from "../../utils/locale-format";

const ListCalendar: FC<ICalendarOptions> = ({
  data,
  onEventClick,
  lang,
  currentDay,
  translation,
  onEditEvent,
}) => {
  const listData = useMemo(() => {
    return generateDateForList(data);
  }, [data]);

  const today = useMemo(() => {
    return format(new Date(), "EEEE, LLLL d, yyyy", {
      locale: getLocale(lang),
    });
  }, [lang]);

  useLayoutEffect(() => {
    const element = document.getElementById(String(currentDay.getDay()));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentDay]);

  return (
    <ul className={"list-item_container"}>
      <p className={"today-action today-list"}>
        {translation("calendar.today") ?? "Today is"} <span>{today}</span>.
      </p>
      {listData.map((item: Date | ICalendarData[], index) => {
        if (item instanceof Date) {
          return (
            <li
              className={`list-item_title ${index === 0 && "disable-margin"}`}
              key={item.getTime()}
              id={String(item.getDay())}
            >
              {format(item, "EEEE, d MMMM", { locale: getLocale(lang) })}
            </li>
          );
        }
        return item.map((d, i) => (
          <ListItem
            item={d}
            key={i}
            position={i}
            onClick={onEventClick}
            onEditEvent={onEditEvent}
          />
        ));
      })}
    </ul>
  );
};

export default ListCalendar;
