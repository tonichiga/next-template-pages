import authMiddleware from "@/middlewares/auth-middleware";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export default function Home() {
  return (
    <main>
      <h1>Index</h1>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = authMiddleware.middleware(
  {
    callback: async (context: GetServerSidePropsContext) => {
      return {
        props: {},
      };
    },
  }
);
