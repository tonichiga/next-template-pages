import authMiddleware from "@/middlewares/auth-middleware";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getDictionary } from "../../get-dictionary";

const SignInPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <h1>signin</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;
  const dictionary = await getDictionary(locale);

  return {
    props: {
      dictionary,
    },
  };
};

export default SignInPage;
