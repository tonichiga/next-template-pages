import { classes } from "@/shared/utils";
import { FC, PropsWithChildren } from "react";

interface IProps {
  medium?: boolean;
  className?: string;
  errorText?: string;
}

const IconInputWrapper: FC<PropsWithChildren<IProps>> = ({
  className,
  errorText,
  medium,
  children,
}) => {
  return (
    <div
      className={classes(
        medium
          ? "min-w-rem-[240px] h-rem-[44px]"
          : "min-w-rem-[240px] h-rem-[36px]",
        "flex items-center gap-rem-[4px] rounded-rem-[6px] border-gray-15 border-[1px] bg-white py-rem-[4px] px-rem-[10px] focus:border-blue-300",
        className,
        errorText && "!border-red-main",
      )}
      id="input-with-icon"
    >
      {children}
    </div>
  );
};

export default IconInputWrapper;
