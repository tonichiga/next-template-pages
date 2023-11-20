import { MouseEvent } from "react";
import { ICalendarData } from "../../types";

type THandler = (event: ICalendarData) => void;

const useEvents = (onEventClick: THandler, onEdit: THandler) => {
  const handleClickEvent = (
    e: MouseEvent<HTMLDivElement>,
    event: ICalendarData,
  ) => {
    if ((e.target as any).id === "edit") {
      return;
    }
    onEventClick(event);
  };

  const handleEditEvent = (event: ICalendarData) => {
    onEdit && onEdit(event);
  };

  return {
    handleClickEvent,
    handleEditEvent,
  };
};

export default useEvents;
