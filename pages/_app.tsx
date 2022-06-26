import "../styles/globals.css";
import { css } from "@emotion/react";
import Header, { headerHeight } from "../components/Header";
import { useRouter } from "next/router";
import { _AppProvider } from "../helpers/providers/provider_App";
import _MoveToMain from "../components/_App/_MoveToMain";
import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import { cacheImages } from "../helpers/StartUpTasks";
import { Content } from "../components/_App/_Content";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const routeChops = router.asPath.slice(1).split("/");
  const isLandingPage = router.route === "/";

  const routeRoot = routeChops[0];
  const [selectedPage, setSelectedPage] = useState(routeRoot);

  useEffect(() => {
    cacheImages();
  }, []);

  useEffect(() => {
    const route = routeChops[0];
    setSelectedPage(route);
  }, [routeChops]);

  return (
    <>
      <Head>
        {/*<meta name="viewport" content="initial-scale=1.0, width=device-width" />*/}
        {/*<meta charSet="utf-8" />*/}
        <title>Mitra</title>
        {/*<meta name="description" content="An example of a meta description." />*/}
        {/*<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />*/}
      </Head>
      <Script
        src="https://kit.fontawesome.com/195ee4c6bd.js"
        crossOrigin="anonymous"
      />
      <div
        css={css`
          position: ${isLandingPage ? "fixed" : "relative"};
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
