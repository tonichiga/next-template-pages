import { classes } from "@/shared/utils";
import { FC } from "react";
import svgMaker from "../../../../svg-maker/svg-maker";

interface IProps {
  iconNameSuffix?: string;
  medium?: boolean;
  suffixClass?: string;
  onClick?: () => void;
}

const IconLeft: FC<IProps> = ({
  iconNameSuffix,
  medium,
  suffixClass,
  onClick,
}) => {
  return (
    <button onClick={onClick && onClick}>
      {svgMaker(
        iconNameSuffix,
        classes(
          medium ? "w-rem-[20px] h-rem-[20px]" : "w-rem-[16px] h-rem-[16px]",
          "fill-[#343330]",
          suffixClass,
        ),
      )}
    </button>
  );
};

export default IconLeft;
