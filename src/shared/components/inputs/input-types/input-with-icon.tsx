import IconInputWrapper from "@/shared/components/inputs/input-types/components/icon-input-wrapper";
import IconLeft from "@/shared/components/inputs/input-types/components/icon-left";
import RightIcon from "@/shared/components/inputs/input-types/components/right-icon";
import { size } from "@/types/components";
import { FC, HTMLAttributes, ReactElement } from "react";
import ErrorText from "./components/error-text";
import InputSize from "./components/sized-input";

type IconPosition = "left" | "right" | "both";

interface IInputWithIconProps extends HTMLAttributes<HTMLInputElement> {
  iconPosition: IconPosition;
  iconNameSuffix?: string;
  iconNamePrefix?: string;
  prefixClass?: string;
  suffixClass?: string;
  size: size;
  errorText?: string;
  value?: string;
  onChange?: (e: any) => void;
  debounce?: number;
  onClickRightIcon?: () => void;
  onClickLeftIcon?: () => void;
  formProps?: any;
  type?: "text" | "password" | "number";
  autoComplete?: string;
}

type inputType = {
  [key in IconPosition]: ReactElement;
};

const InputWithIcon: FC<IInputWithIconProps> = ({
  iconPosition,
  iconNamePrefix = "icon-cross-light",
  iconNameSuffix = "icon-search",
  prefixClass,
  suffixClass,
  errorText,
  className,
  onClickRightIcon,
  formProps,
  onClickLeftIcon,
  autoComplete,
  ...props
}) => {
  const medium = props.size === "m";

  const inputs: inputType = {
    left: (
      <>
        <IconInputWrapper
          medium={medium}
          errorText={errorText}
          className={className}
        >
          <IconLeft
            iconNameSuffix={iconNameSuffix}
            medium={medium}
            suffixClass={suffixClass}
            onClick={onClickLeftIcon}
          />
          <InputSize size={props.size} {...props} formProps={formProps} />
        </IconInputWrapper>
        {errorText && <ErrorText errorText={errorText} />}
      </>
    ),
    right: (
      <>
        <IconInputWrapper
          medium={medium}
          errorText={errorText}
          className={className}
        >
          <InputSize
            autoComplete={autoComplete}
            size={props.size}
            {...props}
            formProps={formProps}
          />
          <RightIcon
            onClickRightIcon={onClickRightIcon}
            medium={medium}
            iconNamePrefix={iconNamePrefix}
            prefixClass={prefixClass}
          />
        </IconInputWrapper>
        {errorText && <ErrorText errorText={errorText} />}
      </>
    ),
    both: (
      <>
        <IconInputWrapper
          medium={medium}
          errorText={errorText}
          className={className}
        >
          <IconLeft
            iconNameSuffix={iconNameSuffix}
            medium={medium}
            suffixClass={suffixClass}
            onClick={onClickLeftIcon}
          />
          <InputSize size={props.size} {...props} formProps={formProps} />
          <RightIcon
            onClickRightIcon={onClickRightIcon}
            medium={medium}
            iconNamePrefix={iconNamePrefix}
            prefixClass={prefixClass}
          />
        </IconInputWrapper>
        {errorText && <ErrorText errorText={errorText} />}
      </>
    ),
  };

  return inputs[iconPosition];
};

export default InputWithIcon;
