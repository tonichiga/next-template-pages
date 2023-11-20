import { FC } from "react";
import { classes } from "@/shared/utils";

interface IProps {
  className?: string;
}

const Divider: FC<IProps> = ({ className }) => {
  return (
    <div className={classes("w-full h-rem-[1px] bg-gray-10", className)} />
  );
};

export default Divider;
