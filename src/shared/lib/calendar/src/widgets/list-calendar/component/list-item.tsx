import { ICalendarData } from "@/lib/calendar/types";
import svgMaker from "@/shared/svg-maker/svg-maker";
import { format } from "date-fns";
import { FC } from "react";
import { useIntervalUpdate } from "../../../hooks/useIntervalUpdate";

interface IProps {
  item: ICalendarData;
  position: number;
  onClick?: (item: ICalendarData) => void;
  onEditEvent?: (item: ICalendarData) => void;
}

const ListItem: FC<IProps> = ({ item, position, onClick, onEditEvent }) => {
  useIntervalUpdate();
  return (
    <li
      className={`list-item_row ${
        (position + 1) % 2 === 0 ? "list-item_row-grey" : ""
      } ${item.isBefore && "item-list_before"}`}
      // onClick={() => onClick && onClick(item)}
    >
      <div className={"item-column"}>
        <p className={"item-time"}>
          {format(item.endAt, "HH:mm")}{" "}
          <span>- {format(item.start, "HH:mm")}</span>
        </p>
      </div>
      <div className={"item-column"}>
        <p className={"item-title"}>{item.member.value}</p>
      </div>
      <div className={"item-column"}>
        <p className={"item-description"}>{item.description}</p>
      </div>
      {item.isBefore ? (
        <div className="item-action">{svgMaker("icon-mark-check")}</div>
      ) : (
        <div className="item-action">
          <button className="action-button" onClick={() => onEditEvent(item)}>
            {svgMaker("icon-pencil")}
          </button>
        </div>
      )}
    </li>
  );
};

export default ListItem;
