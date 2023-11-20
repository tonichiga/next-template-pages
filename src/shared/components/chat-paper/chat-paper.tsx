import { FC, PropsWithChildren } from "react";
import { classes } from "@/shared/utils";

interface IProps {
  className?: string;
}

const ChatPaper: FC<PropsWithChildren<IProps>> = ({ className, children }) => {
  return (
    <div
      className={classes(
        "w-rem-[450px] pt-[24px] pl-rem-[24px] pr-rem-[8px] pb-rem-[10px] bg-white rounded-rem-[12px] shadow-chat flex flex-col overflow-hidden",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ChatPaper;
