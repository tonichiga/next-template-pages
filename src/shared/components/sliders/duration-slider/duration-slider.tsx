import { classes } from "@/shared/utils";
import { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface IDurationSliderProps {
  timeCurrent: number;
  endTime: number;
  className?: string;
  onChange?: (value) => void;
  onTouch?: (value) => void;
}

const DurationSlider = ({
  timeCurrent = 0,
  endTime = 0,
  className,
  onChange,
  onTouch,
}: IDurationSliderProps) => {
  const [currentTime, setCurrentTime] = useState(timeCurrent);

  const handleProgressChange = (value) => {
    setCurrentTime(value);
    onChange && onChange(value);
  };

  useEffect(() => {
    setCurrentTime(timeCurrent);
  }, [timeCurrent]);

  function timeConvert(n) {
    var hours = Math.floor(n / 3600);
    var minutes = Math.floor((n % 3600) / 60);
    var seconds = Math.floor(n % 60);
    return `${hours > 0 ? ("0" + hours).slice(-2) + ":" : ""}${
      minutes > 0 ? ("0" + minutes).slice(-2) + ":" : "00:"
    }${seconds > 0 ? ("0" + seconds).slice(-2) : "00"}`;
  }

  return (
    <div className={classes("flex w-full flex-col", className)}>
      <Slider
        className="cursor-pointer mb-[6px]"
        value={currentTime}
        min={0}
        max={endTime}
        step={1}
        onChange={handleProgressChange}
        onBeforeChange={onTouch}
        railStyle={{
          backgroundColor: "#ECECEC",
          height: "4px",
          borderRadius: "4px",
          transition: "all 300ms",
        }}
        trackStyle={{ backgroundColor: "black" }}
        handleStyle={{
          marginTop: "-3px",
          width: "10px",
          height: "10px",
          borderColor: "black",
          backgroundColor: "black",
          opacity: 1,
          boxShadow: "none",
          transition: "all 300ms",
        }}
      />
      <div className="flex w-full justify-between text-rem-[12px] font-400 items-center">
        <p>{timeConvert(currentTime)}</p>
        <p>{timeConvert(endTime)}</p>
      </div>
    </div>
  );
};

export default DurationSlider;
