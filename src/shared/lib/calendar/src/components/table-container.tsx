import { FC, PropsWithChildren } from "react";

const TableContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className={"table-container"}>{children}</div>;
};

export default TableContainer;
