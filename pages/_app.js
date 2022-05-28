import "../styles/globals.css";
import { css } from "@emotion/react";
import Header from "../components/Header";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
      `}
    >
      <Header route={router.route} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
