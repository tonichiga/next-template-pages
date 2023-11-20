import { classes } from "@/shared/utils";
import s from "./label.module.scss";
import { size } from "@/types/components";
import { SvgMaker } from "../../../../SvgMaker";

interface LabelProps {
  children: React.ReactNode;
  /**
   * TailWind color selector. Background color.
   */
  bgColor: string;
  /**
   * TailWind color selector. Text color.
   */
  color: string;
  size: size;
  icon?: string;
  /**
   * TailWind color selector. Fill color.
   */
  iconColor?: string;
  className?: React.CSSProperties | string;
  svgClassName?: string;
  callback?: () => void;
  onClose?: () => void;
}

const Label = ({
  children,
  bgColor,
  color,
  icon,
  size,
  iconColor,
  className,
  svgClassName,
  callback, // Is required?
  onClose,
}: LabelProps) => {
  const SIZES = {
    s: s.label_s,
    m: s.label_m,
  };
  return (
    <div
      className={classes(
        s.label_container,
        SIZES[size],
        bgColor,
        color,
        className,
      )}
    >
      {icon &&
        SvgMaker(icon, classes(s.label_icon, iconColor, svgClassName), null)}
      {children}
      {onClose && (
        <button onClick={onClose} className="cursor-pointer">
          {SvgMaker(
            "icon-cross",
            classes(s.label_icon, "", iconColor, svgClassName),
            null,
          )}
        </button>
      )}
    </div>
  );
};

export default Label;
