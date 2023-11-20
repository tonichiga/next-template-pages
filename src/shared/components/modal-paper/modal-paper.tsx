import { classes } from "@/shared/utils";
import { FC, PropsWithChildren, memo } from "react";

interface IProps {
  className?: string;
}

const ModalPaper: FC<PropsWithChildren<IProps>> = ({ children, className }) => {
  return (
    <div
      className={classes(
        "bg-white p-[24px] shadow-rem-modal_shadow rounded-rem-[12px]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default memo(ModalPaper);
