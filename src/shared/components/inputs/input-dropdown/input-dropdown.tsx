import { svgMaker } from "@/shared";
import { classes } from "@/shared/utils";
import { size } from "@/types/components";
import { useId, useState } from "react";
import { SvgMaker } from "../../../../../SvgMaker";

interface IInputDropdownProps {
  innerRef?: any;
  icon?: string;
  iconLeft?: string;
  placeholder?: string;
  onChange?: (value) => void;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
  active?: boolean;
  menuType?: string;
  className?: string | React.CSSProperties;
  list?: string;
  value: string;
  isIcon?: boolean;
  size?: size;
  errorText?: string;
  formProps?: any;
  name?: string;
  disabled?: boolean;
}

const InputDropdown = ({
  innerRef,
  icon = "icon-arrow-down",
  placeholder,
  menuType,
  active,
  onChange,
  onBlur,
  onFocus,
  className,
  list,
  value,
  isIcon = true,
  size = "m",
  iconLeft,
  errorText,
  name,
  disabled,
  ...props
}: IInputDropdownProps) => {
  const [focus, setFocus] = useState(false);
  const id = useId();
  return (
    <div
      className={classes(
        "w-full h-full rounded-rem-[6px] bg-white border-[1px] border-gray-15 justify-between flex items-center gap-rem-[8px] relative overflow-hidden flex-1 py-rem-[4px] px-rem-[10px]",
        className,
        focus ? "border-blue-300" : "border-gray-15",
        errorText && "!border-red-main",
        size === "m" ? "h-rem-[44px]" : "h-rem-[36px]",
      )}
    >
      {iconLeft &&
        svgMaker(
          iconLeft,
          classes(
            size === "m"
              ? "w-rem-[20px] h-rem-[20px]"
              : "w-rem-[16px] h-rem-[16px]",
            focus || value.length ? "fill-gray-50" : "fill-gray-30",
          ),
        )}
      <input
        disabled={disabled}
        name={name}
        ref={innerRef}
        value={value}
        list={list}
        id={id}
        onFocusCapture={() => setFocus(true)}
        onBlurCapture={() => setFocus(false)}
        className={classes(
          size === "m"
            ? "placeholder:font-400 !text-rem-[16px] !placeholder:text-rem-[16px]"
            : "placeholder:font-400 !text-rem-[14px] !placeholder:text-rem-[14px]",
          "w-full h-full outline-none font-400 !text-black placeholder:text-gray-30 disabled:bg-white",
        )}
        placeholder={placeholder}
        onChange={(e) => {
          onChange && onChange(e.target.value);
        }}
        onFocus={(e) => {
          onFocus && onFocus(e);
        }}
        onBlur={(e) => {
          onBlur && onBlur(e);
        }}
        {...props}
      />
      {isIcon && (
        <label className="flex items-center h-full right-0 pointer-events-none">
          {SvgMaker(
            icon,
            classes(
              "fill-gray-30 transition-all duration-300",
              size === "m"
                ? "w-rem-[20px] h-rem-[20px]"
                : "w-rem-[16px] h-rem-[16px]",
              active && "rotate-180",
              focus || value?.length ? "fill-gray-50" : "fill-gray-30",
            ),
            null,
          )}
        </label>
      )}
    </div>
  );
};

export default InputDropdown;
