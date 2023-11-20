import { classes } from "@/shared/utils";

interface ITextButton {
  children?: React.ReactNode;
  size: "m" | "s";
  disabled?: boolean;
  className?: React.CSSProperties | string;
  onClick?: () => void;
}

const TextButton = (props: ITextButton) => {
  const { children = "", size, disabled = false, className, onClick } = props;

  const SIZES = {
    m: "text-rem-[14px] leading-20 font-400",
    s: "text-rem-[12px] leading-16 font-400",
  };
  return (
    <button
      onClick={() => onClick && onClick()}
      disabled={disabled}
      className={classes(
        "underline underline-offset-4 !text-black hover:text-gray-dark w-rem-fit",
        SIZES[size.toLowerCase()],
        className,
      )}
    >
      {children}
    </button>
  );
};

export default TextButton;
