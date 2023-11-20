import Button from "../buttons/button/button";
import DefaultErrorMessage from "../error-messages/default-error-message";

interface iSignInPaperProps {
  children: React.ReactNode;
  title: string;
  loading?: "pending" | "idle" | "fulfilled" | "rejected";
  message?: {
    title: string;
    text: string;
  };
  formId: string;
  buttonText: string;
}

const _message = {
  title: "Wrong credentials",
  text: "Invalid Email address or password ",
};

const SignInPaper = ({
  children,
  title = "Title example",
  message = _message,
  formId,
  buttonText,
  loading,
}: iSignInPaperProps) => {
  return (
    <div className="p-[48px] bg-white border-[1px] border-gray-15 w-rem-[608px] rounded-rem-[24px]">
      <div className="text-center mb-[36px] text-rem-[32px] leading-rem-[38px] text-black font-600">
        {title}
      </div>

      {message && (
        <div className="mb-rem-[20px] animate-fade">
          <DefaultErrorMessage title={message.title} text={message.text} />
        </div>
      )}

      <div>{children}</div>

      <div>
        <Button
          size="m"
          type="submit"
          form={formId}
          className={"!w-full"}
          loading={loading === "pending"}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default SignInPaper;
