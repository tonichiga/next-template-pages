import { useState } from "react";
import s from "./page-pagination.module.scss";
import { SvgMaker } from "../../../../../SvgMaker";
import { DefaultDropdown } from "@/general/widgets/dropdowns";
import { classes } from "@/shared/utils";
// import Dropdown from "@/general/widgets/dropdowns/i";

interface IPagination {
  initialPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  hardSet?: (page: number) => void;
  className?: React.CSSProperties | string;
  locals?: any;
}

const PagePagination = ({
  initialPage,
  totalPages,
  onPageChange,
  hardSet,
  locals,
  className,
}: IPagination) => {
  return (
    <div className={classes(s.change_page, className)}>
      <p className="text-rem-[14px] font-400 text-black">{locals.page}</p>
      <div className={s.input_container}>
        <button
          className={s.arrow_button}
          onClick={() => {
            onPageChange(-1);
          }}
        >
          {SvgMaker("icon-arrow-left", "fill-black", null)}
        </button>
        <input
          className={s.input_page}
          type="text"
          value={initialPage}
          onChange={(e) => {
            let valE = e.target.value;
            if (!Number(valE) && valE != "") return;
            if (valE == "") valE = "0";

            const value =
              Number(e.target.value) > totalPages
                ? totalPages
                : Number(e.target.value);

            hardSet(value);
          }}
        />
        <button
          className={s.arrow_button}
          onClick={() => {
            onPageChange(1);
          }}
        >
          {SvgMaker("icon-arrow-right", "fill-black", null)}
        </button>
      </div>
      <p>
        {locals.of} {totalPages}
      </p>
    </div>
  );
};

export default PagePagination;
