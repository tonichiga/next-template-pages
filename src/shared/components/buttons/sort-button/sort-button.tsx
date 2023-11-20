import { classes } from "@/shared/utils";
import { ReactNode } from "react";
import { SvgMaker } from "../../../../../SvgMaker";

interface ISortingButtonProps {
  className?: string;
  label: ReactNode | string;
  sortState?: string | null;
  onClick?: (value) => void;
}

const SortButton = ({
  className,
  label,
  sortState = null,
  onClick,
}: ISortingButtonProps) => {
  const handleSort = (e) => {
    onClick && onClick(e);
  };

  return (
    <button
      className={classes("flex items-center gap-x-rem-[4px]", className)}
      onClick={(e) => handleSort(e)}
    >
      <div className="text-gray-40 text-rem-[14px] font-500 truncate">
        {label}
      </div>
      <div className="flex flex-col">
        {sortState === "asc" &&
          SvgMaker("icon-sort-up", "w-rem-[16px] h-rem-[16px] fill-black")}
        {sortState === "desc" &&
          SvgMaker("icon-sort-down", "w-rem-[16px] h-rem-[16px] fill-black")}
        {!sortState &&
          SvgMaker("icon-sort-both", "w-rem-[16px] h-rem-[16px] fill-black")}
      </div>
    </button>
  );
};

export default SortButton;
