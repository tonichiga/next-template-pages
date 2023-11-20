import { FC, PropsWithChildren } from "react";

interface IProps {
  height?: number;
  className?: string;
}

const CalendarContainer: FC<PropsWithChildren<IProps>> = ({
  height,
  className,
  children,
}) => {
  return (
    <div
      className={`calendar-container ${className}`}
      style={{ height: height }}
    >
      {children}
    </div>
  );
};

export default CalendarContainer;
