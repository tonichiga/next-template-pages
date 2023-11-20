import { FC } from "react";
// @ts-ignore
import { UserNetwork, UserStatus } from "@types/user";
import { classes } from "@/shared/utils";

interface IProps {
  className?: string;
  network: UserNetwork;
}

const PopupStickerStatus: FC<IProps> = ({ className, network }) => {
  return (
    <div>
      <div
        className={classes("w-rem-[12px] h-rem-[12px] rounded-full", className)}
        style={{
          backgroundColor: network === "online" ? "#46CB4B" : "#FF3B30",
        }}
      />
    </div>
  );
};

export default PopupStickerStatus;
