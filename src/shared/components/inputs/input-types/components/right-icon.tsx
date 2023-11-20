import svgMaker from "../../../../svg-maker/svg-maker";
import { classes } from "@/shared/utils";
import { FC } from "react";

interface IProps {
  onClickRightIcon: () => void;
  iconNamePrefix?: string;
  medium?: boolean;
  prefixClass?: string;
}

const RightIcon: FC<IProps> = ({
  onClickRightIcon,
  iconNamePrefix,
  medium,
  prefixClass,
}) => {
  const onClose = (e) => {
    if (onClickRightIcon) {
      onClickRightIcon();
    }
    const element: HTMLDivElement = e.target;
    const input = element.parentElement.querySelector("input");
    const icon = element.parentElement.querySelectorAll("svg");
    icon.forEach((icon) => {
      icon.classList.remove("!fill-gray-dark");
    });
    input.value = "";
  };

  return (
    <div onClick={onClose} className="cursor-pointer">
      {svgMaker(
        iconNamePrefix,
        classes(
          medium ? "w-rem-[20px] h-rem-[20px]" : "w-rem-[16px] h-rem-[16px]",
          "pointer-events-none  fill-gray-30",
          prefixClass,
        ),
      )}
    </div>
  );
};

export default RightIcon;
