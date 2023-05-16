import React, { useCallback, useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import HeaderButton from "./HeaderButton";
import { _AppContext } from "../../helpers/providers/provider_App";
import useWindowSize from "../../helpers/hooks/useWindowSize";
import HeaderLogo from "./HeaderLogo";
import { useRouter } from "next/router";
import {
  colorBackground,
  colorHeaderItem,
  colorLogoNormal,
} from "../../data/colors";

interface Props {
  selectedPage: string; // undefined | about-me | portfolio
  setSelectedPage: (page?: string) => void;
}

export const headerHeight = 70;

export default function Header(props: Props) {
  const router = useRouter();
  const { setMoveToMain, portfolioBgColor, portfolioHeaderItemColor } =
    useContext(_AppContext);

  const windowWidth = useWindowSize();
  const isXs = windowWidth.width < 600;

  const [bgColor, setBgColor] = useState(colorBackground);
  const [logoColor, setLogoColor] = useState(colorHeaderItem);
  const [itemColor, setItemColor] = useState(colorHeaderItem);
  const [shouldBlur, setShouldBlur] = useState(false);
  const [justLoaded, setJustLoaded] = useState(true);
  const [showDev, setShowDev] = useState(false);

  useEffect(() => {
    setJustLoaded(false);
    if (document.documentElement.scrollTop > 24) {
      setShouldBlur(true);
    } else {
      setShouldBlur(false);
    }
  }, []);

  useEffect(() => {
    if (portfolioHeaderItemColor.length > 0) {
      setBgColor(portfolioBgColor);
      setLogoColor(portfolioHeaderItemColor);
      setItemColor(portfolioHeaderItemColor);
    } else {
      setBgColor(colorBackground);
      setLogoColor(colorLogoNormal);
      setItemColor(colorHeaderItem);
    }
  }, [portfolioBgColor, portfolioHeaderItemColor]);

  useEffect(() => {
    if (
      router.query.PortfolioID !== undefined &&
      router.query.PortfolioID === "rich-content-handbook"
    ) {
      window.addEventListener("scroll", SIMMORSAL, true);
    } else {
      window.removeEventListener("scroll", SIMMORSAL, true);
      showDev && setShowDev(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  const SIMMORSAL = useCallback(() => {
    if (
      window.scrollY + window.innerHeight >
      document.getElementById("pageRichContent")?.clientHeight
    ) {
      setShowDev(true);
    } else {
      setShowDev(false);
    }
  }, []);

  const listenToScroll = useCallback(() => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 24) {
      setShouldBlur(true);
    } else {
      setShouldBlur(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll, true);
    return () => {
      window.removeEventListener("scroll", listenToScroll, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      css={css`
        grid-row: 1;
        grid-column: 1;
        position: fixed;
        width: 100%;
        height: ${headerHeight}px;
        z-index: 1000;
        align-self: start;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: ${showDev
          ? "#0056b7"
          : shouldBlur
          ? `${bgColor}${bgColor.length === 7 ? "88" : ""}`
          : "transparent"};
        padding-bottom: ${shouldBlur ? 20 : 0}px;
        backdrop-filter: blur(${shouldBlur ? 3 : 0}px);
        -webkit-backdrop-filter: blur(${shouldBlur ? 3 : 0}px);

        border-bottom-width: 1px;
        border-bottom-color: ${shouldBlur && !showDev
          ? `${bgColor}${bgColor.length === 7 ? "aa" : ""}`
          : "transparent"};
        border-bottom-style: solid;

        transition: 190ms ease;
        transition-property: border-bottom-color, background-color, padding-bottom;
      `}
    >
      {isXs ? (
        <></>
      ) : (
        <HeaderButton
          page={"home"}
          justLoaded={justLoaded}
          color={itemColor}
          selectedPage={props.selectedPage}
          setSelectedPage={() => props.setSelectedPage(undefined)}
          homeClicked={() => setMoveToMain(true)}
          showDev={showDev}
        >
          Home
        </HeaderButton>
      )}
      <HeaderButton
        page={
          !isXs
            ? "about-me"
            : props.selectedPage === "contact-me"
            ? "contact-me"
            : "about-me"
        }
        color={itemColor}
        justLoaded={justLoaded}
        selectedPage={props.selectedPage}
        setSelectedPage={props.setSelectedPage}
        showDev={showDev}
      >
        About me
      </HeaderButton>

      <HeaderLogo
        color={logoColor}
        justLoaded={justLoaded}
        selectedPage={props.selectedPage}
        setSelectedPage={props.setSelectedPage}
      />

      <HeaderButton
        page={"portfolio"}
        color={itemColor}
        justLoaded={justLoaded}
        selectedPage={props.selectedPage}
        setSelectedPage={props.setSelectedPage}
        showDev={showDev}
      >
        Portfolio
      </HeaderButton>
      {isXs ? (
        <></>
      ) : (
        <HeaderButton
          page={"contact-me"}
          color={itemColor}
          justLoaded={justLoaded}
          selectedPage={props.selectedPage}
          setSelectedPage={props.setSelectedPage}
          showDev={showDev}
        >
          Contact Me
        </HeaderButton>
      )}
      <p
        css={css`
          z-index: 1001;
          position: fixed;
          width: 100%;
          padding: 0;
          color: #000000;
          margin: 0 0 0 0;
          text-align: center;
          font-size: 0.9em;
          font-weight: bold;
          opacity: ${showDev ? 1 : 0};
          filter: blur(${showDev ? 0 : 24}px);
          transform: translateY(${showDev ? "140px" : headerHeight + "px"})
            translateX(${!isXs ? "-19px" : "0px"});
          transition: 600ms ease;
          transition-property: opacity, filter, transform;
          transition-delay: ${showDev ? 800 : 200}ms;
        `}
      >
        WE STAND WITH UKRAINE
      </p>
    </div>
  );
}
