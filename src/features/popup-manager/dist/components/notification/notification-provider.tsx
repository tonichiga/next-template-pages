import { memo, useEffect, useMemo, useRef, useState } from "react";
import Manager from "../../service/NotificationManager";
import Widgets from "../../config/notification/notification-list";
import { classes } from "@/shared/utils";

const NoficationProvider = () => {
  const [data, setData] = useState([]);
  const [names, setNames] = useState([]);
  const modalRef = useRef([]);

  useEffect(() => {
    const handleOpenModal = (name, data) => {
      setData((prev) => [data, ...prev]);
      setNames((prev) => [name, ...prev]);
    };

    const closeModal = (indexes) => {
      if (indexes[0] === 0) {
        setData((prev) => prev.filter((_, index) => index !== 0));
        setNames((prev) => prev.filter((_, index) => index !== 0));
        return;
      }
      if (indexes[0] === -1) {
        setData((prev) => prev.filter((_, index) => index !== prev.length - 1));
        setNames((prev) =>
          prev.filter((_, index) => index !== prev.length - 1),
        );
        return;
      }

      if (indexes.length && indexes.length !== 0) {
        indexes.forEach((i) => {
          setData((prev) => prev.filter((_, index) => index !== i));
          setNames((prev) => prev.filter((_, index) => index !== i));
        });
        return;
      }

      setData([]);
      setNames([]);
    };

    Manager.addChangeListener("change", handleOpenModal);
    Manager.addChangeListener("close", closeModal);
    return () => {
      Manager.removeChangeListener("change", handleOpenModal);
      Manager.removeChangeListener("close", closeModal);
    };
  }, []);

  const activeList = useMemo(() => {
    const _arr = [...names];
    const result = _arr.map((name, index) => {
      return { component: Widgets[name], _id: index };
    });

    return result;
  }, [names]);

  const refReducer = (index, value) => {
    modalRef.current[index] = value;
  };

  return (
    <div className="fixed top-0 right-0 z-[1001]">
      {activeList.length !== 0 &&
        activeList.map((item, i) => {
          const Component = item.component;
          const scaleClass =
            i === activeList.length - 1
              ? "scale-1"
              : i === activeList.length - 2
              ? "scale-08"
              : "scale-06";

          return (
            <div
              key={item._id}
              data-index={item._id}
              className={classes(
                "animate-dropdown absolute top-[40px] right-[40px] origin-bottom transition-transform duration-500 drop-shadow-sm",
                // i > 2 && "!opacity-0",
                scaleClass,
              )}
              style={{
                transform: `translateY(${100 * i}%)`,
                zIndex: i,
              }}
              ref={(ref) => {
                refReducer(i, ref);
              }}
            >
              <Component key={i} {...data[i]} />
            </div>
          );
        })}
    </div>
  );
};

export default memo(NoficationProvider);
