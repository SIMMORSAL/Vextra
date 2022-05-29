import "../styles/globals.css";
import { css } from "@emotion/react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { _AppProvider } from "../data/providers/provider_App";
import _MoveToMain from "../components/_MoveToMain";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <_AppProvider>
      <div
        css={css`
          width: 100%;
          height: 100%;
        `}
      >
        <Header route={router.route} />
        <Component {...pageProps} />
        <_MoveToMain />
      </div>
    </_AppProvider>
  );
}

export default MyApp;
