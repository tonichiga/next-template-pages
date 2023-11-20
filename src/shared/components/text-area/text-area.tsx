import { FC, HTMLAttributes, useId } from "react";
import { classes } from "@/shared/utils";
import ErrorText from "@/shared/components/inputs/input-types/components/error-text";

interface IProps extends HTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  formProps: any;
  errorText?: string;
  labelText?: string;
}

const TextArea: FC<IProps> = ({
  formProps,
  className,
  errorText,
  labelText,
  ...props
}) => {
  const id = useId();
  return (
    <>
      {labelText ? (
        <label
          htmlFor={id}
          className="!text-rem-[14px] mb-[8px] font-500 leading-rem-[20px] text-[#686868] block"
        >
          {labelText}
        </label>
      ) : null}
      <textarea
        className={classes(
          "resize-none w-full h-full text-rem-[16px] placeholder:text-[1rem] leading-rem-[24px] rounded-rem-[6px] border-gray-15 border-[1px] outline-none font-400 py-rem-[4px] px-rem-[10px] bg-white placeholder:text-gray-30 text-black focus:border-blue-300",
          className,
          errorText && "!border-red-main",
        )}
        {...props}
        {...formProps}
      ></textarea>
      {errorText && <ErrorText errorText={errorText} />}
    </>
  );
};

export default TextArea;
