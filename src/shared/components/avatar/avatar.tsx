import { FC, PropsWithChildren } from "react";
// @ts-ignore
import { classes } from "@/shared/utils";
import Image from "next/image";

interface IProps {
  className?: string;
  img?: string;
  width?: number;
  height?: number;
}

const Avatar: FC<PropsWithChildren<IProps>> = ({
  className,
  img,
  children,
  width = 44,
  height = 44,
}) => {
  return (
    <div
      className={classes(
        `min-w-rem-[${width}px] w-rem-[${width}px] h-rem-[${height}px] rounded-full flex items-center justify-center overflow-hidden`,
        className,
      )}
    >
      {img ? (
        <Image
          src={img}
          alt={""}
          width={width}
          height={height}
          className={"w-full h-full"}
        />
      ) : (
        children
      )}
    </div>
  );
};

export default Avatar;
