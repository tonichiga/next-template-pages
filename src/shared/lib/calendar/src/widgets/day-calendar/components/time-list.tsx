import { FC, PropsWithChildren } from "react";

interface IProps {
  repeat: number;
}
const TimeList: FC<PropsWithChildren<IProps>> = ({ children, repeat = 5 }) => {
  return (
    <ul
      className={"time-list"}
      style={{ gridTemplateColumns: `repeat(${repeat},minmax(278px, 1fr))` }}
    >
      {children}
    </ul>
  );
};

export default TimeList;
