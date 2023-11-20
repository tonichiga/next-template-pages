import { FC, useMemo } from "react";
import { format } from "date-fns";
import getLocale from "../../../utils/locale-format";

interface IHeaderProps {
  activeDay: Date;
  lang?: string;
}
const Header: FC<IHeaderProps> = ({ activeDay, lang }) => {
  const formatDay = useMemo(() => {
    if (!activeDay) {
      return "";
    }
    return format(activeDay, "EEEE, d MMM yyyy", { locale: getLocale(lang) });
  }, [activeDay, lang]);
  return (
    <div className={"day-header"}>
      <h2 className={"day-header-title"}>{formatDay}</h2>
    </div>
  );
};

export default Header;
