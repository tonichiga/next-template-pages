import useTranslate from "@/hooks/useTranslate";
import { useState } from "react";
import PagePagination from "./page-pagination/page-pagination";
import s from "./pagination.module.scss";
import RowsPagination from "./rows-pagination/rows-pagination";
import { TDropdownData } from "@/types";
// import Dropdown from "@/general/widgets/dropdowns/i";

interface IPagination {
  initialPage: number;
  totalPages: number;
  rowsPerPage: TDropdownData;
  rowsPerPageValues?: TDropdownData[];
  onPageChange?: (page: number) => void;
  onChangeRowsPerPage?: (rows: number) => void;
  className?: React.CSSProperties | string;
}

const Pagination = ({
  initialPage,
  totalPages,
  rowsPerPage,
  rowsPerPageValues,
  onPageChange,
  onChangeRowsPerPage,
  className,
}: IPagination) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const translate = useTranslate();
  const local = translate("pagination_table");
  function changePage(step) {
    if (currentPage + step > totalPages || currentPage + step < 1) return;
    console.log(step, "currentPage + step");
    onPageChange && onPageChange(currentPage + step);
    setCurrentPage((prev) => prev + step);
  }
  function hardSetPage(page) {
    setCurrentPage(page);
    onPageChange(page);
  }
  return (
    <div className={s.pagination_container}>
      <PagePagination
        initialPage={currentPage}
        totalPages={totalPages}
        onPageChange={changePage}
        hardSet={hardSetPage}
        className={className}
        locals={local}
      />
      <RowsPagination
        rowsPerPage={rowsPerPage}
        rowsPerPageValues={rowsPerPageValues}
        onChangeRowsPerPage={onChangeRowsPerPage}
        className={className}
        locals={local}
      />
    </div>
  );
};

export default Pagination;
