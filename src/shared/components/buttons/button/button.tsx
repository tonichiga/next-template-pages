import { size } from "@/types/components";
import { memo } from "react";
import { SvgMaker } from "../../../../../SvgMaker";
import s from "./button.module.scss";
import { classes } from "@/shared/utils";

interface IButtonProps {
  children?: React.ReactNode;
  iconAlignment?: "left" | "right";
  icon?: string;
  size?: size;
  styleKey?: "primary" | "secondary" | "tertiary";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  open?: boolean;
  rotateAngle?: number;
  type?: "button" | "submit" | "reset";
  form?: string;
  onClick?: () => void;
}

const SIZES = {
  m: "button_m_size",
  s: "button_s_size",
};

const Button = (props: IButtonProps) => {
  const {
    children = "",
    iconAlignment = "left",
    icon = undefined,
    size = "m",
    styleKey = "primary",
    className,
    loading,
    open = false,
    disabled = false,
    rotateAngle = 180,
    form,
    type = "button",
    onClick,
  } = props;

  const rotation = "rotate-" + rotateAngle;
  return (
    <button
      form={form}
      type={type}
      onClick={() => {
        onClick && onClick();
      }}
      disabled={disabled || loading}
      className={classes(
        s[SIZES[size.toLowerCase()]],
        s[styleKey.toLowerCase()],
        icon ? (children ? s.icon_with_label : s.icon_only) : "",
        children && iconAlignment == "right" && s.reverse,
        className,
      )}
    >
      {icon &&
        SvgMaker(
          icon,
          classes(`${loading && s.loading_rotate} ${open && rotation}`),
        )}
      {children}
    </button>
  );
};

export default memo(Button);
