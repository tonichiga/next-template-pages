import { classes } from "@/shared/utils";
import { size } from "@/types/components";
import { FC, HTMLAttributes, useEffect, useRef, useState } from "react";

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  type?: "text" | "password" | "number";
  size: size;
  debounce?: number;
  value?: string;
  onChange?: (e: any) => void;
  formProps: any;
  labelText?: string;
  autoComplete?: string;
}

const InputSize: FC<IInputProps> = ({
  size,
  debounce = 0,
  formProps,
  labelText,
  autoComplete,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(props.value ?? "");
  const { onChange, value } = props;
  const timeout = useRef(null);

  const focusEffect = (e) => {
    const element = e.target;
    element.parentElement.classList.add("!border-blue-300");
    const icon = element.parentElement.querySelectorAll("svg");
    icon.forEach((icon) => {
      icon.classList.add("!fill-gray-dark");
    });
  };
  const blurEffect = (e) => {
    const element = e.target;
    element.parentElement.classList.remove("!border-blue-300");
    if (!element.value.length) {
      const icon = element.parentElement.querySelectorAll("svg");
      icon.forEach((icon) => {
        icon.classList.remove("!fill-gray-dark");
      });
    }
  };

  useEffect(() => {
    if (!debounce) {
      onChange && onChange(inputValue);
      return;
    }

    timeout.current = setTimeout(() => {
      onChange(inputValue);
    }, debounce);

    return () => clearTimeout(timeout.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, debounce]);

  return (
    <input
      autoComplete={"on"}
      type={props.type ?? "text"}
      {...props}
      onFocus={focusEffect}
      onBlur={blurEffect}
      {...formProps}
      className={classes(
        size === "m"
          ? "!text-[1rem] leading-rem-[24px] font-400 bg-[transparent] "
          : "!text-[calc((14/16)*1rem)] leading-rem-[20px] font-400",
        "outline-none w-full h-full placeholder:text-gray-30 text-black placeholder:text-[1rem]",
      )}
    />
  );
};

export default InputSize;
