// noinspection JSUnresolvedLibraryURL

import "../styles/globals.css";
import { css } from "@emotion/react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { _AppProvider } from "../helpers/providers/provider_App";
import _MoveToMain from "../components/_App/_MoveToMain";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import { cacheImages } from "../helpers/StartUpTasks";
import { Content } from "../components/_App/_Content";
import { getGeneralData } from "../data/local/_dataGeneral";
import { getAllPortfolios } from "../data/local/dataPortfoliosPage";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const routeChops = router.asPath.slice(1).split("/");
  const isLandingPage = router.route === "/";

  const routeRoot = routeChops[0];
  const [selectedPage, setSelectedPage] = useState(routeRoot);
  // const refAnalytics = useRef(null);

  const generalData = getGeneralData();

  useEffect(() => {
    const ti = setTimeout(() => {
      cacheImages({
        portfolios: getAllPortfolios(),
        startupImageCacheQueue: generalData.startupImageCacheQueue,
      });
    }, 250); // starting with a delay so all <img> tags in doc are started loading

    if (generalData.firebaseConfig) {
      initializeApp(generalData.firebaseConfig);
    }

    return () => {
      clearTimeout(ti);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const route = routeChops[0];
    setSelectedPage(route);
  }, [routeChops]);

  useEffect(() => {
    const analytics = getAnalytics();
    console.log(`11111  asdfasdf:  ${JSON.stringify(analytics)}`);
    if (analytics) {
      logEvent(analytics, "page_view", {
        page_path: `${JSON.stringify(router.route)}   Q: ${JSON.stringify(
          router.query
        )}`,
      });
    }
  }, [router.query, router.route]);

  return (
    <>
      <Head>
        <title>mitra</title>
        <meta name="description" content="Mitra's portfolio." />
        <meta name="og:title" content="mitra" />
        <meta name="og:url" content="https://mitra-portfolio.vercel.app" />
        <meta name="og:description" content="Mitra's portfolio." />
        <meta
          name="og:image"
          content="https://mitra-portfolio.vercel.app/preview.jpg"
        />

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
          href="/android-chrome-192x192.png"
        />

        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#333333" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        <meta
          name="msapplication-TileImage"
          content="/favicons/mstile-150x150.png"
        />
        <meta name="msapplication-square150x150logo" content="/mstile-150x150.png" />
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
