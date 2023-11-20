import { classes } from "@/shared/utils";
import { useState } from "react";
import { SvgMaker } from "../../../../../SvgMaker";

interface IAction {
  icon?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  iconStyle?: string;
}

const ActionButton = ({
  icon,
  children,
  onClick = () => {},
  iconStyle,
}: IAction) => {
  const [pop, setPop] = useState(false);
  return (
    <div className="relative overflow-visible">
      <div
        className={classes(
          "absolute bottom-rem-[-45px] left-[50%] translate-x-[-50%] transition-all duration-30 pointer-events-none z-50",
          pop ? "" : "opacity-0",
        )}
      >
        <div className="flex flex-col items-center">
          <div className="bg-white w-rem-fit px-[8px] shadow-popup rounded-rem-[6px] text-rem-[12px] leading-rem-[20px] font-400">
            {children}
          </div>
          {/* <svg
            className="mt-rem-[-3px]"
            width="13"
            height="11"
            viewBox="0 0 13 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.36603 10.5C6.98112 11.1667 6.01887 11.1667 5.63397 10.5L0.870835 2.25C0.485935 1.58333 0.967061 0.749999 1.73686 0.749999L11.2631 0.75C12.0329 0.75 12.5141 1.58333 12.1292 2.25L7.36603 10.5Z"
              fill="white"
            />
          </svg> */}
        </div>
      </div>
      <button
        className="flex items-center justify-center w-rem-[36px] h-rem-[36px] rounded-rem-[6px] transition-all duration-300 hover:bg-gray-15"
        onMouseEnter={() => {
          setPop(true);
        }}
        onMouseLeave={() => {
          setPop(false);
        }}
        onClick={onClick}
      >
        {SvgMaker(
          "icon-" + icon,
          classes("w-rem-[20px] h-rem-[20px]", iconStyle),
        )}
      </button>
    </div>
  );
};

export default ActionButton;
