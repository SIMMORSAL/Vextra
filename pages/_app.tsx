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
import { getGeneralData } from "../data/local/_dataGeneral";
import { getAllPortfolios } from "../data/local/dataPortfoliosPage";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const routeChops = router.asPath.slice(1).split("/");
  const isLandingPage = router.route === "/";

  const routeRoot = routeChops[0];
  const [selectedPage, setSelectedPage] = useState(routeRoot);

  const generalData = getGeneralData();

  useEffect(() => {
    runStartupTasks({
      portfolios: getAllPortfolios(),
      startupImageCacheQueue: generalData.startupImageCacheQueue,
    });
  }, []);

  useEffect(() => {
    const route = routeChops[0];
    setSelectedPage(route);
  }, [routeChops]);

  return (
    <>
      <Head>
        {/*<meta name="description" content="An example of a meta description." />*/}
        <title>Vextra</title>

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicons/apple-touch-icon.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-chrome-192x192.png"
        />

        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta
          name="msapplication-TileImage"
          content="/favicons/mstile-150x150.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="/favicons/mstile-150x150.png"
        />
      </Head>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href={`https://fonts.googleapis.com/css2?${generalData.fonts}&display=swap`}
        rel="stylesheet"
      />
      <Script src={generalData.fontAwesomeKitAddress} crossOrigin="anonymous" />
      {/* <Script async src="//www.instagram.com/embed.js"/>*/}
      <div
        css={css`
          font-family: ${generalData.defaultFont};
          //font-family: "Dosis", sans-serif;
          font-weight: 400;
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
              <Content Component={Component} pageProps={pageProps} />
            )}
            <_MoveToMain />
          </div>
        </_AppProvider>
      </div>
    </>
  );
}

export default MyApp;
