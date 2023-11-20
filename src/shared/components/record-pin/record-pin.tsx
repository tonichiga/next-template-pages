import { FC } from "react";
import { classes } from "@/shared/utils";

interface IProps {
  className?: string;
}

const RecordPin: FC<IProps> = ({ className }) => {
  return (
    <div
      className={classes(
        "w-rem-[16px] h-rem-[16px] flex items-center justify-center rounded-full border-[1px] border-[#A4A4A4]",
        className,
      )}
    >
      <div className={"bg-red-main rounded-full w-rem-[12px] h-rem-[12px]"} />
    </div>
  );
};

export default RecordPin;
