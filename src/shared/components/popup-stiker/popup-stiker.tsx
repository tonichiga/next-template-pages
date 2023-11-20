import { FC, PropsWithChildren } from "react";
import { classes } from "@/shared/utils";

interface IProps {
  className?: string;
}

const PopupStiker: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={classes(
        "w-rem-[16px] h-rem-[16px] !text-rem-[12px] text-white leading-rem-[16px] overflow-hidden rounded-full bg-red-main font-600 flex items-center justify-center",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default PopupStiker;
