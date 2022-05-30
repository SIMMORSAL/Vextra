import "../styles/globals.css";
import { css } from "@emotion/react";
import Header, { headerHeight } from "../components/Header";
import { useRouter } from "next/router";
import { _AppProvider } from "../data/providers/provider_App";
import _MoveToMain from "../components/_MoveToMain";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
      `}
    >
      <_AppProvider>
        <div
          css={css`
            width: 100%;
            height: 100%;
          `}
        >
          <Header route={router.route} />
          <div
            css={css`
              width: 100%;
              height: calc(100% - ${headerHeight}px);
            `}
          >
            <Component {...pageProps} />
          </div>
          <_MoveToMain />
        </div>
      </_AppProvider>
    </div>
  );
}

export default MyApp;
