import svgMaker from "@/shared/svg-maker/svg-maker";
import { FC } from "react";

interface IProps {
  name: string;
  handleEditEvent: () => void;
  isBefore?: boolean;
}

const MemberActionName: FC<IProps> = ({ name, handleEditEvent, isBefore }) => {
  return (
    <div className="member-name_action">
      <p className={"event-title"}>{name}</p>
      {!isBefore ? (
        <button onClick={handleEditEvent} id="edit">
          {svgMaker("icon-pencil", "w-rem-[16px] h-rem-[16px] fill-gray-30")}
        </button>
      ) : (
        <button>
          {svgMaker(
            "icon-mark-check",
            "w-rem-[16px] h-rem-[16px] fill-gray-30",
          )}
        </button>
      )}
    </div>
  );
};

export default MemberActionName;
