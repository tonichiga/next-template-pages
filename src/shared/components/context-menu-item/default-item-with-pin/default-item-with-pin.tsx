import { classes } from "@/shared/utils";
import { size } from "@/types/components";
import { FC } from "react";
import Pins from "@/shared/components/pins";
import { TDropdownData } from "@/types";

interface IProps {
  size?: size;
  className?: string;
  onChange?: (item: string, id: number) => void;
  active?: boolean;
  item: TDropdownData;
}

const DefaultItemWithPin: FC<IProps> = ({ active, onChange, size, item }) => {
  return (
    <div>
      <li
        className={classes(
          "px-rem-[12px] py-rem-[8px] bg-white rounded-rem-[6px] cursor-pointer transition-all hover:bg-gray-10 flex items-center gap-rem-[8px]",
          active ? "!bg-blue-400" : "",
        )}
        onClick={() => onChange(item.value, item.id)}
      >
        <Pins size={"s"} text={item.value} className={"!max-w-max"} />
      </li>
    </div>
  );
};

export default DefaultItemWithPin;
