import { classes } from "@/shared/utils";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { SvgMaker } from "../../../../../SvgMaker";

interface IVolumeSliderProps {
  initialVolume: number;
  className?: string;
  onChange?: (value) => void;
}

const VolumeSlider = ({
  initialVolume = 0,
  className,
  onChange,
}: IVolumeSliderProps) => {
  const [volumeLevel, setVolumeLevel] = useState(initialVolume);
  let tempVolume = 0;
  const handleChange = (value) => {
    setVolumeLevel(value);

    onChange && onChange(value);
  };

  const toggleVolume = () => {
    if (volumeLevel === 0) {
      setVolumeLevel(tempVolume);
    } else {
      tempVolume = volumeLevel;
      setVolumeLevel(0);
    }
  };
  return (
    <div className={classes("flex items-center !gap-x-rem-[12px]", className)}>
      <button onClick={toggleVolume}>
        {SvgMaker("icon-speaker", "w-rem-[24px] h-rem-[24px] fill-black", "")}
      </button>
      <Slider
        className="cursor-pointer !w-rem-[136px]"
        value={volumeLevel}
        min={0}
        max={100}
        step={1}
        onChange={handleChange}
        railStyle={{
          backgroundColor: "#ECECEC",
          height: "4px",
          borderRadius: "6px",
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
        }}
      />
    </div>
  );
};

export default VolumeSlider;
