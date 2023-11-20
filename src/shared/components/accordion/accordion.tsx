import { FC, PropsWithChildren } from "react";
import { svgMaker } from "@/shared";
import { classes } from "@/shared/utils";
import useHeightJump from "@/hooks/useHeightJump";

interface IProps {
  title: string;
  className?: string;
  childContainerClassName?: string;
}

const Accordion: FC<PropsWithChildren<IProps>> = ({
  children,
  title,
  className,
  childContainerClassName,
}) => {
  const { handleOpen, open, refContainer } = useHeightJump();

  return (
    <div className={classes(className)}>
      <div className="w-full pb-rem-[16px] border-b-[1px] border-gray-15 select-none">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={handleOpen}
        >
          <p className="text-rem-[16px] flex-1 font-600 leading-rem-[24px]">
            {title}
          </p>
          {svgMaker(
            "icon-arrow-down",
            classes(
              "w-rem-[20px] h-rem-[20px] transition-all",
              open ? "transform rotate-180" : ""
            )
          )}
        </div>
        <div
          className="w-full transition-all max-h-0 duration-300 ease-linear overflow-hidden"
          ref={refContainer}
        >
          <div
            className={classes(
              open ? "border-t-[1px]" : "border-[0px]",
              "pt-[16px]  border-gray-15 mt-rem-[16px] transition-all",
              childContainerClassName
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
