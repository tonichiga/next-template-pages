import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";
import store from "@/redux/store";
import {
  ModalProvider,
  NotificationProvider,
  PopupProvider,
} from "@/features/popup-manager";
import { classes } from "@/shared/utils";
import { Inter } from "next/font/google";
import { useMemo } from "react";
import { TranslationContext } from "@/providers/TranslationProvider";
import chalk from "chalk";
import { isDev } from "@/shared/utils/tools";
import FetchingProvider from "@/providers/FetchingProvider";

const inter = Inter({ subsets: ["latin"] });

!isDev &&
  console.log(
    chalk.green(
      `This is ${process.env.BRANCH_NAME} branch, @see`,
      process.env.BRANCH_URL
    )
  );

function App({ Component, pageProps }: AppProps) {
  const { dictionary } = pageProps;

  const d = useMemo(() => {
    return dictionary || {};
  }, [dictionary]);

  return (
    <div className={classes("relative", inter.className)}>
      <Provider store={store}>
        <FetchingProvider />
        <TranslationContext.Provider value={d}>
          <PopupProvider />
          <ModalProvider />
          <NotificationProvider />
          <Component {...pageProps} />
        </TranslationContext.Provider>
      </Provider>

      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
    </div>
  );
}

export default App;
