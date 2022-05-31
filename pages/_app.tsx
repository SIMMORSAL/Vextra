import "../styles/globals.css";
import { css } from "@emotion/react";
import Header, { headerHeight } from "../components/Header";
import { useRouter } from "next/router";
import { _AppContext, _AppProvider } from "../data/providers/provider_App";
import _MoveToMain from "../components/_MoveToMain";
import { useContext, useEffect, useState } from "react";
import { route } from "next/dist/server/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const routeChops = router.asPath.slice(1).split("/");

  const routeRoot = routeChops[0];
  const [selectedPage, setSelectedPage] = useState(routeRoot);

  useEffect(() => {
    const route = routeChops[0];
    setSelectedPage(route);
  }, [routeChops]);

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
          <Header selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          <Content
            Component={Component}
            pageProps={pageProps}
            routeChops={routeChops}
          />
          <_MoveToMain />
        </div>
      </_AppProvider>
    </div>
  );
}

export default MyApp;

function Content({ Component, pageProps, routeChops }) {
  const { fadeOutContent, setFadeOutContent, flashContent, setFlashContent } =
    useContext(_AppContext);
  const router = useRouter();

  // const shouldFadeIn = routeChops.length === 1;
  const shouldFadeIn =
    router.route === "/about-me" ||
    router.route === "/portfolio" ||
    router.route === "/contact-me";
  const [doFadeIn, setDoFadeIn] = useState(!shouldFadeIn);

  useEffect(() => {
    if (shouldFadeIn) {
      setDoFadeIn(false);
      setTimeout(() => {
        setDoFadeIn(true);
      }, 65);
    }
  }, [routeChops, shouldFadeIn, router.route]);

  useEffect(() => {
    if (flashContent)
      setTimeout((args) => {
        setFlashContent(false);
      }, 200);
  }, [flashContent, setFlashContent]);

  return (
    <div
      css={css`
        width: 100%;
        height: calc(100% - ${headerHeight}px);
        /* opacity: ${doFadeIn ? (fadeOutContent ? 0 : 1) : 0}; */

        transform: scale(${flashContent ? 0.95 : 1});
        border: ${flashContent ? "1px solid #484848" : "0px solid transparent"};

        //transition: ${fadeOutContent ? 100 : 500}ms ease;
        transition: 200ms ease;
        transition-property: opacity, transform, border-bottom-color,
          border-bottom-width, border-right-color, border-right-width,
          border-left-color, border-left-width, border-top-color, border-top-width;
      `}
    >
      <Component {...pageProps} />
    </div>
  );
}
