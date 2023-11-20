import { FC } from "react";

interface IProps {
  errorText?: string;
  [key: string]: any;
}

const ErrorText: FC<IProps> = ({ errorText }) => {
  return (
    <span className="text-rem-[12px] text-red-main font-500">{errorText}</span>
  );
};

export default ErrorText;
