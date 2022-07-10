import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import HeaderButton from "./HeaderButton";
import { _AppContext } from "../../helpers/providers/provider_App";
import useWindowSize from "../../helpers/tools/hooks/useWindowSize";
import HeaderLogo from "./HeaderLogo";

interface Props {
  selectedPage: string; // undefined | about-me | portfolio
  setSelectedPage: (page?: string) => void;
  // route: string;
}

export const headerHeight = 70;

export default function Header(props: Props) {
  const { setMoveToMain } = useContext(_AppContext);

  const windowWidth = useWindowSize();
  const isXs = windowWidth.width < 600;

  const [shouldBlur, setShouldBlur] = useState(false);
  const [justLoaded, setJustLoaded] = useState(true);

  useEffect(() => {
    setJustLoaded(false);
    if (document.documentElement.scrollTop > 24) {
      setShouldBlur(true);
    } else {
      setShouldBlur(false);
    }
  }, []);

  const listenToScroll = () => {
    // const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    // const height =
    //   document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // const normalizedScroll = winScroll / height;

    const scroll = document.documentElement.scrollTop;
    if (scroll > 24) {
      setShouldBlur(true);
    } else {
      setShouldBlur(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
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
        background-color: ${shouldBlur ? "#ffffffcc" : "transparent"};
        padding-bottom: ${shouldBlur ? 20 : 0}px;
        backdrop-filter: blur(${shouldBlur ? 3 : 0}px);
        -webkit-backdrop-filter: blur(${shouldBlur ? 3 : 0}px);

        border-bottom-width: 1px;
        border-bottom-color: ${shouldBlur ? "#00000033" : "transparent"};
        border-bottom-style: solid;

        transition: ${shouldBlur ? 300 : 200}ms ease;
        transition-property: border-bottom-color, background-color, padding-bottom;
      `}
    >
      {isXs ? (
        <></>
      ) : (
        <HeaderButton
          page={"home"}
          justLoaded={justLoaded}
          selectedPage={props.selectedPage}
          setSelectedPage={() => props.setSelectedPage(undefined)}
          homeClicked={() => setMoveToMain(true)}
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
        justLoaded={justLoaded}
        selectedPage={props.selectedPage}
        setSelectedPage={props.setSelectedPage}
      >
        About me
      </HeaderButton>

      <HeaderLogo
        justLoaded={justLoaded}
        selectedPage={props.selectedPage}
        setSelectedPage={props.setSelectedPage}
      />

      <HeaderButton
        page={"portfolio"}
        justLoaded={justLoaded}
        selectedPage={props.selectedPage}
        setSelectedPage={props.setSelectedPage}
      >
        Portfolio
      </HeaderButton>
      {isXs ? (
        <></>
      ) : (
        <HeaderButton
          page={"contact-me"}
          justLoaded={justLoaded}
          selectedPage={props.selectedPage}
          setSelectedPage={props.setSelectedPage}
        >
          Contact Me
        </HeaderButton>
      )}
    </div>
  );
}
