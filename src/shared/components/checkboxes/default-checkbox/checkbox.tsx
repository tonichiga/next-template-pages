import { useId, ChangeEvent } from "react";
import { SvgMaker } from "../../../../../SvgMaker";
import s from "./checkbox.module.scss";
interface ICheckBoxProps {
  children?: React.ReactNode;
  checked: boolean;
  icon?: string;
  style?: "default" | "bordered";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: React.CSSProperties | string;
  iconClassName?: React.CSSProperties | string;
}

const CheckBox = ({
  children,
  checked,
  icon,
  style = "default",
  onChange,
  className,
  iconClassName,
}: ICheckBoxProps) => {
  const id = useId();

  const checkStyle = {
    default: s.default,
    bordered: s.bordered,
  };
  return (
    <label
      className={`flex items-center gap-rem-[8px] ${className} ${checkStyle[style]}`}
    >
      <input
        type="checkbox"
        id={id}
        className={s.checkbox}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>
        <span className={s.checkbox_icon}></span>
        {icon && SvgMaker(icon, iconClassName, null)}
      </label>
      <span className="text-rem-[14px] leading-rem-[100%] font-400 text-black">
        {children}
      </span>
    </label>
  );
};

export default CheckBox;
