import { FC, useMemo } from "react";
import { ICalendarActionProps } from "@/lib/calendar/types";
import { svgMaker } from "@/shared";
import { format } from "date-fns";
import getLocale from "../../utils/locale-format";

const ActionHeader: FC<ICalendarActionProps> = ({
  onCurrentClick,
  onNextClick,
  onPrevClick,
  disabled,
  translation = () => null,
  lang,
}) => {
  const today = useMemo(() => {
    return format(new Date(), "EEEE, LLLL d, yyyy", {
      locale: getLocale(lang),
    });
  }, [lang]);
  return (
    <div className={"action-header"}>
      <div className={"action-block"}>
        <button className={"action-btn"} onClick={() => onPrevClick()}>
          {svgMaker("icon-arrow-left", "w-rem-[20px] h-rem-[20px]")}
          {translation("calendar.previous") ?? "Previous"}
        </button>
        <button
          className={"action-btn"}
          onClick={() => onCurrentClick()}
          disabled={disabled}
        >
          {translation("calendar.current") ?? "Current"}
        </button>
        <button className={"action-btn"} onClick={() => onNextClick()}>
          {translation("calendar.next") ?? "Next"}
          {svgMaker("icon-arrow-left", "w-rem-[20px] h-rem-[20px] rotate-180")}
        </button>
      </div>
      <p className={"today-action"}>
        {translation("calendar.today") ?? "Today is"} <span>{today}</span>.
      </p>
    </div>
  );
};

export default ActionHeader;
