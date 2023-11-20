import { classes } from "@/shared/utils";
import { CheckBox } from "@/shared/components";
import { FC } from "react";
import { size } from "@/types/components";
import { svgMaker } from "@/shared";

interface IProps {
  onChange: (value: any) => void;
  item: any;
  className?: string;
  value: any;
  size?: size;
}

const DragCheckboxItem: FC<IProps> = ({
  onChange,
  item,
  className,
  size = "m",
  value,
}) => {
  return (
    <li
      className={classes(
        "px-rem-[12px] py-rem-[8px] bg-white rounded-rem-[6px] transition-all hover:bg-gray-10 flex items-center gap-rem-[8px] cursor-grab justify-between",
        className,
      )}
    >
      <CheckBox checked={value.includes(item)} onChange={(e) => onChange(item)}>
        <p
          className={classes(
            size === "m"
              ? "!text-rem-[16px] !leading-rem-[24px]"
              : "!text-rem-[14px] !leading-rem-[20px]",
            "font-400",
          )}
        >
          {item}
        </p>
      </CheckBox>
      {svgMaker(
        "icon-six-dots",
        classes(
          size === "m"
            ? "w-rem-[20px] h-rem-[20px]"
            : "w-rem-[16px] h-rem-[16px]",
        ),
      )}
    </li>
  );
};

export default DragCheckboxItem;
