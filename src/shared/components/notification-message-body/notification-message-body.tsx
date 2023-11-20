import constants from "@/shared/constants";
import svgMaker from "@/shared/svg-maker/svg-maker";
import { useEffect, useState } from "react";

function getTimeAgoString(timestamp: number) {
  const currentTime = Date.now();
  const timeDifference = (currentTime - timestamp) / 1000; // Разница в секундах

  if (timeDifference < 10) {
    return "Только что";
  } else if (timeDifference < 30) {
    return "10 секунд назад";
  } else if (timeDifference < 60) {
    return "30 секунд назад";
  } else if (timeDifference < 60 * 2) {
    return "1 минуту назад";
  } else if (timeDifference < 60 * 5) {
    return "5 минут назад";
  } else if (timeDifference < 60 * 15) {
    return "15 минут назад";
  } else if (timeDifference < 60 * 30) {
    return "30 минут назад";
  } else if (timeDifference < 60 * 60) {
    return "1 час назад";
  } else {
    return "Более 2-х часов назад";
  }
}

function updateElapsedTime(timestamp) {
  const timeAgo = getTimeAgoString(timestamp);
  // Здесь вы можете отобразить `timeAgo` на вашей странице или в консоли

  return timeAgo;
}

const NotificationMessageBody = ({ data, onClose, fill = false }) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const timestamp = Date.now();

    const value = updateElapsedTime(timestamp);
    setTimeAgo(value);

    const interval = setInterval(() => {
      const value = updateElapsedTime(timestamp);
      setTimeAgo(value);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex text-rem-[16px] text-black justify-between items-center mb-rem-[8px]">
        Заголовок уведомления
        <div className="flex gap-rem-[8px]">
          <span onClick={() => {}} id="pin" className="cursor-pointer">
            {svgMaker(
              fill ? constants.icons.PIN_FILL : constants.icons.PIN,
              `w-rem-[16px] h-rem-[16px] ${
                fill ? "fill-black" : "fill-gray-40 "
              }`,
            )}
          </span>
          <span onClick={onClose} id="close" className="cursor-pointer">
            {svgMaker(
              constants.icons.CLOSE_LIGHT,
              "w-rem-[16px] h-rem-[16px] fill-gray-40",
            )}
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between border-b-[1px] border-gray-15 pb-rem-[8px] mb-rem-[24px]">
        <div className="text-rem-[14px] text-gray-40 mb-rem-[8px]">
          {data.message}
        </div>
        <div className="text-gray-20 text-end text-rem-[12px] block">
          {timeAgo}
        </div>
      </div>
    </div>
  );
};

export default NotificationMessageBody;
