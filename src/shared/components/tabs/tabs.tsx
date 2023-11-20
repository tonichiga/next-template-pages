import { useEffect } from "react";
import s from "./tabs.module.scss";

interface ITab {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs = ({ tabs, activeTab, onTabChange }: ITab) => {
  return (
    <div className={s.container} id="con">
      {tabs.map((tab, index) => (
        <div className={s.hide} key={tab}>
          <input
            id={tab}
            type="radio"
            name="tab"
            defaultChecked={index === 0}
            onClick={() => onTabChange(tab)}
          />
          <label
            htmlFor={tab}
            className={`${s.tab} ${activeTab === tab ? s.activeTab : ""}`}
          >
            <p>{tab}</p>
            <div className={s.line}></div>
          </label>
        </div>
      ))}
      <div className={s.glider} id="glider"></div>
    </div>
  );
};

export default Tabs;
