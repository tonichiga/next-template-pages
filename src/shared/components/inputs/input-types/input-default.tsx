import { classes } from "@/shared/utils";
import { FC } from "react";
import ErrorText from "./components/error-text";

interface IProps {
  errorText?: string;
  [key: string]: any;
  formProps?: any;
  className?: string;
  onChange?: (e: any) => void;
}

const DefaultInput: FC<IProps> = ({
  errorText,
  formProps,
  className,
  ...props
}) => {
  return (
    <>
      <input
        type={props.type ?? "text"}
        {...props}
        {...formProps}
        className={classes(
          props.size === "m"
            ? "h-rem-[44px]  !text-rem-[16px] placeholder:text-rem-[16px] leading-rem-[24px]"
            : "h-rem-[36px] !text-rem-[14px] placeholder:text-rem-[14px] leading-rem-[20px]",
          "min-w-rem-[240px] rounded-rem-[6px] border-gray-15 border-[1px] outline-none font-400 py-rem-[4px] px-rem-[10px] bg-white placeholder:text-gray-30 text-black focus:border-blue-300",
          errorText && "!border-red-main",
          className,
        )}
      />
      {errorText && <ErrorText errorText={errorText} />}
    </>
  );
};

export default DefaultInput;
