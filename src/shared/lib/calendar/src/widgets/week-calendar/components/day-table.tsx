import { FC, PropsWithChildren } from "react";

const DayTable: FC<PropsWithChildren> = ({ children }) => {
  return <ul className={"day-table"}>{children}</ul>;
};

export default DayTable;
