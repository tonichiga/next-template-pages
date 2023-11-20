import useResize from "@/hooks/useResize";
import useTranslate from "@/hooks/useTranslate";
import { classes } from "@/shared/utils";
import { useEffect } from "react";
import s from "./main-selector.module.scss";

type IButton = {
  label: string;
  onClick: (value: string) => void;
};

interface ISelector {
  data: IButton[];
  size?: "s" | "m";
  className?: string;
  selectedLabel?: string;
}

const MainSelector = ({
  data,
  size = "m",
  className,
  selectedLabel,
}: ISelector) => {
  const resize = useResize();
  const t = useTranslate();
  useEffect(() => {
    const indicator = document.querySelector("[data-indicator]") as HTMLElement;

    const button = document.querySelector(
      `[data-name="${selectedLabel}"]`,
    ) as HTMLElement;

    if (button) {
      indicator.style.width = `${button.offsetWidth}px`;
      indicator.style.transform = `translateX(${button.offsetLeft}px)`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resize, selectedLabel]);

  return (
    <div
      className={classes(
        s.button_container,
        size === "s" && s.small_container,
        className,
        "scroll-bar bg-gray-10",
      )}
    >
      <div className="z-[5] flex items-center  h-full">
        {data.map((value, index) => {
          return (
            <button
              key={index}
              className={classes(
                s.selector_button,
                selectedLabel === value.label && s.active,
              )}
              onClick={() => value.onClick && value.onClick(value.label)}
              data-selector-button
              data-name={value.label}
            >
              {t(`crm_user_detailed.selector.${value.label}`)}
            </button>
          );
        })}
      </div>
      <div className={s.background_indicator} data-indicator></div>
    </div>
  );
};

export default MainSelector;
