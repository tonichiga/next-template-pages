import { DefaultDropdown } from "@/general/widgets/dropdowns";
import { classes } from "@/shared/utils";
import { TDropdownData } from "@/types";
import { useState } from "react";
import s from "./rows-pagination.module.scss";

// import Dropdown from "@/general/widgets/dropdowns/i";

interface IPagination {
  rowsPerPage: TDropdownData;
  rowsPerPageValues?: TDropdownData[];
  onChangeRowsPerPage?: (rows: number) => void;
  className?: React.CSSProperties | string;
  locals?: any;
}

const RowsPagination = ({
  rowsPerPage,
  rowsPerPageValues,
  onChangeRowsPerPage,
  className,
  locals,
}: IPagination) => {
  const [dropdownValue, setDropdownValue] =
    useState<TDropdownData>(rowsPerPage);

  return (
    <div className={classes(s.rows_count, className)}>
      <p className="text-rem-[14px] leading-[20px] text-black">
        {locals.rows_on_page}
      </p>
      <div className={"max-w-rem-[84px] h-rem-[36px] rounded-rem-[6px]"}>
        <DefaultDropdown
          value={dropdownValue}
          size="s"
          data={rowsPerPageValues}
          title="select"
          onChange={(value: string, id: string | number) => {
            setDropdownValue({ value, id: id as number });
            onChangeRowsPerPage && onChangeRowsPerPage(Number(value));
          }}
          className={
            "!w-rem-[84px] border-[1px] border-gray-15 rounded-rem-[6px] [&>div]:!bottom-[calc(100%+4px)] [&>div]:!top-[unset]"
          }
        />
      </div>
    </div>
  );
};

export default RowsPagination;
