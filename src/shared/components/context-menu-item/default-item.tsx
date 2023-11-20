import { svgMaker } from "@/shared";
import { classes } from "@/shared/utils";
import { TDropdownData } from "@/types";
import { size } from "@/types/components";
import { FC } from "react";

interface IProps {
  size?: size;
  className?: string;
  onChange?: () => void;
  active?: boolean;
  item: TDropdownData;
  icon?: boolean;
  direction?: "left" | "right";
  iconNameLeft?: string;
  iconNameRight?: string;
}

const DefaultItem: FC<IProps> = ({
  onChange,
  item,
  size = "m",
  className,
  active = false,
  icon,
  direction = "left",
  iconNameLeft = "icon-clock",
  iconNameRight = "icon-arrow-rem-right",
}) => {
  return (
    <li
      className={classes(
        "px-rem-[12px]  py-rem-[8px] bg-white rounded-rem-[6px] cursor-pointer transition-all hover:bg-gray-10 flex items-center gap-rem-[8px] min-w-[0]",
        active ? "!bg-blue-400" : "",
        direction === "left" ? "justify-start" : "justify-between",
        className,
      )}
      onClick={onChange}
    >
      {icon &&
        direction === "left" &&
        svgMaker(
          iconNameLeft,
          classes(
            size === "m"
              ? "w-rem-[20px] h-rem-[20px]"
              : "w-rem-[16px] h-rem-[16px]",
            active ? "!fill-white" : "",
          ),
        )}
      <div style={{ maxWidth: "100%" }}>
        <p
          className={classes(
            "block truncate",
            size === "m"
              ? "!text-[1rem] leading-[1.5rem] text-black"
              : "!text-[0.875rem] leading-rem-[1.25rem] text-black",
            "font-400",
            active && "!text-white",
            item.value === "--unknown--" ? "opacity-0" : "",
          )}
        >
          {item.value || "None"}
        </p>
      </div>
      {icon &&
        direction === "right" &&
        svgMaker(
          iconNameRight,
          classes(
            size === "m"
              ? "w-rem-[20px] h-rem-[20px]"
              : "w-rem-[16px] h-rem-[16px]",
            active ? "!fill-white" : "",
          ),
        )}
    </li>
  );
};

export default DefaultItem;
