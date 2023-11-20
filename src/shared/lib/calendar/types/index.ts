import { TDropdownData } from "@/types";

export interface ICalendarData {
  id?: number;
  member: TDropdownData;
  description: string;
  start: Date;
  endAt?: Date;
  duration?: number;
  isBefore?: boolean;
}

export interface IDate {}

export interface ICalendarOptions {
  data: ICalendarData[];
  currentDay?: Date;
  height?: number;
  onEventClick: (events: ICalendarData) => void;
  onEventMouseOver?: (event: ICalendarData) => void;
  onEventMouseOut?: (event: ICalendarData) => void;
  onEditEvent?: (event: ICalendarData) => void;
  className?: string;
  translation?: any;
  lang?: string;
}

export interface ICalendarActionProps {
  onPrevClick: () => void;
  onNextClick: () => void;
  onCurrentClick: () => void;
  disabled: boolean;
  translation?: any;
  lang?: string;
}
