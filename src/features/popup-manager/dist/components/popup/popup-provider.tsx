import { memo, useEffect, useMemo, useState } from "react";
import s from "./popup-provider.module.scss";
import Manager from "../../service/PopupManager";
import Widgets from "../../config/popup/popup-list";
import { motion, AnimatePresence } from "framer-motion";

const enterTimeout = 500;
const autoDelete = true;
const exitTimeout = 1000;

const PopupWrapper = ({ onClose, children }) => {
  useEffect(() => {
    const interval = setTimeout(() => {
      onClose(0);
    }, 4000);

    return () => {
      clearTimeout(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};

const PopupProvider = () => {
  const [data, setData] = useState([]);
  const [names, setNames] = useState([]);

  const handleClose = (position) => {
    if (position === "all") {
      setData([]);
      setNames([]);
      return;
    }

    if (position === -1) {
      // remove last
      setData((prev) => prev.filter((_, index) => index !== prev.length - 1));
      setNames((prev) => prev.filter((_, index) => index !== prev.length - 1));
      return;
    }

    if (position === 0) {
      // remove first
      setData((prev) => prev.filter((_, index) => index !== 0));
      setNames((prev) => prev.filter((_, index) => index !== 0));
      return;
    }

    // remove position index
    setData((prev) => prev.filter((_, index) => index !== position));
    setNames((prev) => prev.filter((_, index) => index !== position));
  };

  useEffect(() => {
    const handleOpenModal = (name, data) => {
      setData((prev) => [...prev, data]);
      setNames((prev) => [...prev, name]);
    };

    Manager.addChangeListener("change", handleOpenModal);
    Manager.addChangeListener("close", handleClose);
    return () => {
      Manager.removeChangeListener("change", handleOpenModal);
      Manager.removeChangeListener("close", handleClose);
    };
  }, []);

  const activeList = names.map((name) => {
    const Component = Widgets[name];
    return Component;
  });

  return (
    <div className={s.backdrop}>
      <ul>
        <AnimatePresence initial={false}>
          {activeList.map((Component, index) => {
            return (
              <motion.li
                key={data[index].modalId}
                initial={{ opacity: 0, y: 50, scale: 0.3 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              >
                <PopupWrapper onClose={handleClose}>
                  <Component {...data[index].data} index={index} />
                </PopupWrapper>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default memo(PopupProvider);
