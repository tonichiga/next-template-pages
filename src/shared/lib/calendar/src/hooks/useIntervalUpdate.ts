import { useEffect, useRef, useState } from "react";

export const useIntervalUpdate = () => {
  const [, forceUpdate] = useState(0);
  const interval = useRef(null);

  const updateInterval = () => {
    clearInterval(interval.current);
    forceUpdate((s) => s + 1);
    const now = new Date();
    const timeInterval = 60000 - now.getSeconds() * 1000;
    interval.current = setInterval(() => {
      updateInterval();
    }, timeInterval);
  };

  useEffect(() => {
    updateInterval();
    return () => {
      clearInterval(interval.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
