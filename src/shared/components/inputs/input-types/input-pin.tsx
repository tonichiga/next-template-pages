import { size } from "@/types/components";
import {
  ChangeEvent,
  FC,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useRef,
  useState,
} from "react";
import Pin from "../../pins";
import { classes } from "@/shared/utils";

interface IProps {
  size: size;
  type?: "text" | "password" | "number";
  onChange?: (pins: string[]) => void;
  [key: string]: any;
}

const pinName: string[] = [
  "Active",
  "Has potential",
  "Do not call",
  "New",
  "Cold",
  "No potential",
  "Long term call back",
  "Test",
  "No answer",
  "No interest",
  "Call back",
  "Long term call back",
  "Low potentional",
];

const InputPin: FC<IProps> = ({ size, onChange, ...props }) => {
  const [pin, setPin] = useState<typeof pinName>([]);
  const [value, setValue] = useState<string>("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const editRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<any>(null);

  //add pin to array bll
  function addPinItem() {
    const findPin = pinName.filter((item) => {
      if (value.length) {
        //@ts-ignore
        const valueArray: string[] = [...value.toLowerCase().trim()];
        //@ts-ignore
        const itemArray = [...item.toLowerCase().trim()];
        const result = valueArray.every((item, index) => {
          return item === itemArray[index];
        });
        return result;
      }
    });
    if (findPin.length) {
      if (pin.includes(findPin[0])) {
        return;
      }
      setPin((prev) => [...prev, findPin[0]]);
      onChange && onChange([...pin, findPin[0]]);
      editRef.current.innerHTML = "";
      setValue("");
    }
  }

  //add pin if caret inactive 2s
  function addPinTimeout() {
    timeoutRef.current = setTimeout(() => {
      console.log("call");
      addPinItem();
    }, 1000);
  }

  //events for keydown
  const events = {
    //  " ": addPinTimeout,
    Enter: (e: KeyboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      addPinItem();
    },
    Tab: (e: KeyboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      addPinItem();
    },
  };

  const handlePressSpace = (e: KeyboardEvent<HTMLInputElement>) => {
    clearTimeout(timeoutRef.current);
    events[e.key] && events[e.key](e);
  };

  const handleSetValue = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.innerText;
    if (inputValue === " ") {
      editRef.current.innerHTML = "";
      return;
    }
    setValue(inputValue);
  };

  const focusEdit = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.contains(wrapperRef.current)) {
      editRef.current.focus();
      e.currentTarget.classList.add("!border-blue-300");
    }
  };

  const blurEdit = (e: FocusEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove("!border-blue-300");
  };

  return (
    <div
      onClick={focusEdit}
      onBlur={blurEdit}
      ref={wrapperRef}
      className="flex items-center gap-rem-[4px] flex-wrap w-rem-[244px] bg-white min-h-rem-[36px] pl-rem-[10px] py-rem-[8px] pr-rem-[8px] rounded-rem-[6px] border-gray-15 border-[1px] outline-none font-400 text-black cursor-text"
    >
      {pin.map((item, index) => {
        return (
          <Pin
            key={index}
            size={size}
            text={item}
            onClick={() => {
              setPin((prev) => prev.filter((e) => e !== item));
              onChange && onChange(pin.filter((e) => e !== item));
            }}
            isCloseMark
          />
        );
      })}
      <div
        contentEditable
        onInput={handleSetValue}
        onKeyDown={handlePressSpace}
        ref={editRef}
        className={classes(
          props.size === "m"
            ? "text-rem-[16px] leading-rem-[24px]"
            : "text-rem-[14px] leading-rem-[20px]",
          "outline-none pointer-events-none",
        )}
      />
      {!pin.length && !value.length && (
        <p
          className={classes(
            props.size === "m"
              ? "text-rem-[16px] leading-rem-[24px]"
              : "text-rem-[14px] leading-rem-[20px]",
            "text-gray-30 ml-rem-[-4px]",
          )}
        >
          {props.placeholder}
        </p>
      )}
    </div>
  );
};

export default InputPin;
