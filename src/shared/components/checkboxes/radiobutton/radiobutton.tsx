import { useId } from "react";
import { SvgMaker } from "../../../../../SvgMaker";
import s from "./radiobutton.module.scss";
interface IRadioButtonProps {
  children?: React.ReactNode;
  checked?: boolean;
  icon?: string;
  name: string;
  onChange?: () => void;
  className?: React.CSSProperties | string;
  iconClassName?: React.CSSProperties | string;
}

const RadioButton = ({
  children,
  checked,
  icon,
  name,
  onChange,
  className,
  iconClassName,
}: IRadioButtonProps) => {
  const id = useId();
  return (
    <label className={`flex items-center gap-rem-[8px] ${className}`}>
      <input
        type="radio"
        id={id}
        className={s.radio}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>
        <span className={s.radio_icon}></span>
        {icon && SvgMaker(icon, iconClassName, null)}
      </label>
      <span className="text-rem-[14px] leading-rem-[100%] font-400 text-black">
        {children}
      </span>
    </label>
  );
};

export default RadioButton;
