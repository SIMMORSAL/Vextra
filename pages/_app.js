import "../styles/globals.css";
import { css } from "@emotion/react";
import Header from "../components/Header";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
      `}
    >
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
