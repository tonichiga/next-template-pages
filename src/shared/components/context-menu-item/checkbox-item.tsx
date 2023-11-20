import { FC, MouseEvent, useMemo, useRef } from "react";
import { CheckBox } from "@/shared/components";
import Pin from "@/shared/components/pins";
import { classes } from "@/shared/utils";
import { size } from "@/types/components";
import { TDropdownData } from "@/types";

interface IProps {
  value: TDropdownData[] | string[];
  onChange: (value: TDropdownData | string) => void;
  item: TDropdownData | string;
  size?: size;
  isPin?: boolean;
  className?: string;
  pinBg?: string;
}

const CheckboxItem: FC<IProps> = ({
  value,
  onChange,
  item,
  className,
  isPin,
  size = "m",
  pinBg,
}) => {
  const liRef = useRef<HTMLLIElement | null>(null);
  const changeValue = (
    e: MouseEvent<HTMLElement>,
    item: TDropdownData | string,
  ) => {
    if (e.target === liRef.current) {
      onChange(item);
    }
  };

  const isCheck = useMemo<boolean>(() => {
    const flatValue = value.map((val) => val.id || val);
    return flatValue.includes(typeof item === "string" ? item : item?.id);
  }, [value, item]);

  return (
    <li
      className={classes(
        "px-rem-[12px] py-rem-[8px] bg-white rounded-rem-[6px] cursor-pointer transition-all hover:bg-gray-10",
        className,
      )}
      onClick={(e) => changeValue(e, item)}
      ref={liRef}
    >
      <CheckBox checked={isCheck} onChange={(e) => onChange(item)}>
        {!isPin ? (
          <p
            className={classes(
              size === "m"
                ? "!text-rem-[16px] !leading-rem-[24px]"
                : "!text-rem-[14px] !leading-rem-[20px]",
              "font-400",
            )}
          >
            {typeof item === "string" ? item : item.value}
          </p>
        ) : (
          <Pin
            size={size}
            text={typeof item === "string" ? item : item.value}
            onClick={() => null}
            className={"cursor-pointer z-10"}
            bgColor={pinBg}
          />
        )}
      </CheckBox>
    </li>
  );
};

export default CheckboxItem;
