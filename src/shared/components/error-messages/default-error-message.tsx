const _message = {
  title: "Wrong credentials",
  text: "Invalid Email address or password ",
};

const DefaultErrorMessage = ({
  title = _message.title,
  text = _message.text,
}) => {
  return (
    <div className="p-[12px] border-[1px] border-red-main bg-red-opacity text-center rounded-rem-[6px] text-black">
      <p className="text-rem-[16px] font-600 leading-rem-[24px]">{title}</p>
      <p className="text-rem-[14px] font-500 leading-rem-[20px]">{text}</p>
    </div>
  );
};

export default DefaultErrorMessage;
