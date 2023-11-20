import svgMaker from "@/shared/svg-maker/svg-maker";
import { classes } from "@/shared/utils";
import { size } from "@/types/components";
import { FC } from "react";

interface IProps {
  size: size;
  text: string;
  isCloseMark?: boolean;
  bgColor?: string;
  onClick?: () => void;
  className?: string;
}
type colors =
  | "#DEECDC"
  | "#DCE2EC"
  | "#F1E1E9"
  | "#F3DDCA"
  | "#D6EEEA"
  | "#E3E2E0"
  | "#FAEDCC"
  | "#ECE0DB"
  | "#D6E4EE"
  | "#E6DEED"
  | "#F4FACC";

type colorType = {
  [key: string]: colors;
};

const color: colorType = {
  Active: "#DEECDC",
  "Has potential": "#DCE2EC",
  "Do not call": "#F1E1E9",
  "Call back": "#F3DDCA",
  New: "#D6EEEA",
  Cold: "#E3E2E0",
  "No potential": "#FAEDCC",
  "Long term call back": "#ECE0DB",
  "No answer": "#E6DEED",
  "No interest": "#F4FACC",
  Test: "#D6E4EE",
  "Low potentional": "#F1E1E9",
};

const Pin: FC<IProps> = ({
  size = "m",
  text,
  onClick,
  isCloseMark = false,
  bgColor = "#ECECEC",
  className,
}) => {
  return (
    <div
      className={classes(
        size === "s" ? "!text-rem-[10px]" : "!text-rem-[12px] py-rem-[2px]",
        "px-rem-[4px] rounded-rem-[4px] flex items-center font-500 leading-rem-[16px] cursor-default relative z-10 h-max whitespace-nowrap w-max text-black",
        className,
        // bgColor ? "bg-gray-15" : "",
      )}
      onClick={!isCloseMark ? onClick && onClick : undefined}
      style={{ backgroundColor: color[text] ? color[text] : bgColor }}
    >
      <span>{text}</span>
      {isCloseMark && (
        <div onClick={onClick && onClick}>
          {svgMaker(
            "icon-cross-light",
            classes(
              size === "m"
                ? "w-rem-[12px] h-rem-[12px]"
                : "w-rem-[8px] h-rem-[8px]",
              "ml-rem-[4px] cursor-pointer",
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default Pin;
