import { classes } from "@/shared/utils";
import { FC, HTMLAttributes, useId } from "react";
import ErrorText from "./components/error-text";

interface IProps extends HTMLAttributes<HTMLInputElement> {
  labeltext?: string;
  errorText?: string;
  type?: "password" | "text" | "number";
  className?: string;
  [key: string]: any;
  formProps: { [key: string]: any };
  name?: string;
}
const InputWithLabel: FC<IProps> = ({
  labelText,
  errorText,
  formProps,
  className,
  // name,
  ...props
}) => {
  const id = useId();
  return (
    <>
      <label
        htmlFor={id}
        className={classes(
          "text-[0.875rem] mb-[8px] font-500 leading-[1.25rem] text-gray-40 block",
          className,
        )}
      >
        {labelText}
      </label>
      <input
        type={props.type ?? "text"}
        {...props}
        {...formProps}
        className={classes(
          props.size === "m"
            ? "text-[1rem] leading-[1.5rem] placeholder:text-[1rem] placeholder:text-gray-30"
            : "text-[0.875rem] leading-[1.25rem] placeholder:text-[0.875rem] placeholder:text-gray-30",
          "min-w-rem-[240px] w-full h-rem-[44px] rounded-rem-[6px] border-gray-15 border-[1px] outline-none font-400 py-rem-[4px] px-rem-[10px] bg-white text-black focus:border-blue-300",
          errorText && "!border-red-main",
        )}
        id={id}
      />
      {errorText && <ErrorText errorText={errorText} />}
    </>
  );
};

export default InputWithLabel;
