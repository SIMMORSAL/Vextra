// noinspection JSUnresolvedLibraryURL

import "../styles/globals.css";
import { css } from "@emotion/react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { _AppProvider } from "../helpers/providers/provider_App";
import _MoveToMain from "../components/_App/_MoveToMain";
import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import { runStartupTasks } from "../helpers/StartUpTasks";
import { Content } from "../components/_App/_Content";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const routeChops = router.asPath.slice(1).split("/");
  const isLandingPage = router.route === "/";

  const routeRoot = routeChops[0];
  const [selectedPage, setSelectedPage] = useState(routeRoot);

  useEffect(() => {
    runStartupTasks();
  }, []);

  useEffect(() => {
    const route = routeChops[0];
    setSelectedPage(route);
  }, [routeChops]);

  return (
    <>
      <Head>
        {/*<meta name="description" content="An example of a meta description." />*/}
        <title>Mitra</title>
      </Head>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&family=Dosis&family=Raleway:wght@300&display=swap"
        rel="stylesheet"
      />
      <Script
        src="https://kit.fontawesome.com/195ee4c6bd.js"
        crossOrigin="anonymous"
      />
      <div
        css={css`
          font-family: "Raleway", sans-serif;
          //font-family: "Dosis", sans-serif;
          font-weight: 300;
          //font-size: 1.1em;
          position: ${isLandingPage ? "fixed" : "inline"};
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: fit-content;
          min-height: 100%;
        `}
      >
        <_AppProvider>
          <div
            css={css`
              width: 100%;
              height: fit-content;
              min-height: 100%;
            `}
          >
            <div
              css={css`
                display: ${isLandingPage ? "none" : "flex"};
              `}
            >
              <Header
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            {isLandingPage ? (
              <Component {...pageProps} />
            ) : (
              <Content
                Component={Component}
                pageProps={pageProps}
                routeChops={routeChops}
              />
            )}
            <_MoveToMain />
          </div>
        </_AppProvider>
      </div>
    </>
  );
}

export default MyApp;
