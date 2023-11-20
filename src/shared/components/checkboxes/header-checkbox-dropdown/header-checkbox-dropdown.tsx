import { useEffect, useState } from "react";
import CheckBox from "../default-checkbox/checkbox";
import svgMaker from "@/shared/svg-maker/svg-maker";
import CheckboxBody from "@/general/widgets/dropdowns/components/body/checkbox-body";
import s from "./header-checkbox-dropdown.module.scss";
import { classes } from "@/shared/utils";

const checkboxDataExample: string[] = [
  "Finance",
  "Marketing",
  "Sales",
  "IT",
  "HR",
];

interface IProps {
  className?: string;
  onChange: (value: string[], name: string) => void;
  name?: string;
  data?: string[];
  haveHaxHeight?: boolean;
  values?: string[];
  defaultOpen?: boolean;
}

const HeaderCheckboxDropdown = ({
  className,
  onChange,
  name,
  data = checkboxDataExample,
  haveHaxHeight = true,
  values,
  defaultOpen,
}: IProps) => {
  const [_values, _setValues] = useState<string[]>(values);
  const [checkedAll, setCheckedAll] = useState(false);
  const [open, setOpen] = useState(defaultOpen || false);

  useEffect(() => {
    _setValues(values);
  }, [values]);

  const handleChangeAll = (type) => {
    if (type === "clear") {
      _setValues([]);
      return;
    }
    setCheckedAll((prev) => {
      if (!prev) {
        _setValues(data);
      } else {
        _setValues([]);
      }

      return !prev;
    });
  };

  const handleChangeBody = (value) => {
    _setValues((prev) => {
      const index = prev.indexOf(value);
      if (index === -1) {
        return [...prev, value];
      }

      return prev.filter((item) => item !== value);
    });
  };

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    onChange && onChange(_values, name);
  }, [onChange, name, _values]);

  return (
    <div className={classes(className, s.checkbox)} data-open={open}>
      <div className="flex items-center justify-between border-b border-gray-15 py-rem-[10px]">
        <div className="flex items-center">
          <CheckBox checked={checkedAll} onChange={handleChangeAll} />
          <span className="text-rem-[16px] font-600 leading-[120%] text-black">
            {name}
          </span>
        </div>
        <div
          onClick={handleToggle}
          className="cursor-pointer h-full flex justify-center items-center px-rem-[6px]"
        >
          {svgMaker(
            "icon-arrow-down",
            classes(
              "fill-black stroke-black w-rem-[20px] h-rem-[20px] transition-transform duration-200",
              open && "rotate-180",
            ),
          )}
        </div>
      </div>
      <div className={s.checkbox_body}>
        <CheckboxBody
          haveHaxHeight={haveHaxHeight}
          data={data}
          onChange={handleChangeBody}
          value={_values}
          className={"[&>li]:pl-0"}
        />
      </div>

      <button
        onClick={() => {
          handleChangeAll("clear");
        }}
        className="text-gray-20 text-rem-[12px] leading-[133% px-rem-[9px] py-rem-[10px] cursor-pointer text-start"
        type="button"
      >
        Clear all
      </button>
    </div>
  );
};

export default HeaderCheckboxDropdown;
